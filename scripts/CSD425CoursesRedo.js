/**
 * @author: Patrick Normile
 * Date: 1/2/2025
 * CSD 425
 * The resources for learning to create this code was gotten from the book 
 * "Javascript the comprehensive guide by Philip Ackermann"
 * 
 * Another source used for the fetch function was :
 * https://youtu.be/2sQ9xiEAXNo?si=8ks_O2bISIXrC4wY
 */

/**
 *  this function creates the table of courses when the page is loaded.
 *  All table rows start greyed out
 */ 
function init(){
    // from docDB through lambda
    const connectionStr = "https://gq36rkqx07.execute-api.us-east-1.amazonaws.com/DocDbStage/";

    // from lambda
    //const connectionStr = ('https://vo239v3ve2.execute-api.us-east-1.amazonaws.com/Dev');

    // from local json
    //const connectionStr = "../data/CSD425Courses.json";
    
    const startButton = document.getElementById('btn_start');

    // pg 417
    // author suggests this is a better way to add event handler
    // it completely separates code from the HTML.
    startButton.addEventListener('click', start, false);
    // pg 550 fetch info
    const data = fetch(connectionStr) 
        .then((response) => {
            // console.log(typeof(response));
            // console.log(response);
            // console.log(response.status);
            // console.log(response.bodyUsed);

            return response.json();
        })
        .then(result => {
            // had to parse once I connect to the documentDB
            result = JSON.parse(result.body);
            console.log(result);
            console.log(typeof(result));
            // pg 285
            // this is to ensure the quarters are in order
            result.sort((val1, val2) => {
                if(val1.quarter < val2.quarter)
                    return -1;
                else if(val1.quarter > val2.quarter)
                    return 1;
                else return 0;
            });
            //console.log(result.length);
            const tBody = document.getElementById("tbl_body");
            
            // result.sort((val1, val2) => {
            //     if(val1.name < val2.name) return -1;
            //     else if(val1.name > val2.name) return 1;
            //     else return 0;
            // })

            // Set up the first quarter.
            const trq = document.createElement('tr');
            const tdq = document.createElement('td');

            tdq.textContent = "Quarter 1";
            trq.appendChild(tdq);
            trq.className = 'quarter';     
            tBody.appendChild(trq);

            let currentQuarter = 1;

            for(let i = 0; i < result.length; i++){
                   // my thinking here is that I sort the results once
                   // then iterate through the array just once for O(n) time 
                   // complexity.
                   // IDEA: make each quarter a table and use a switch to add
                   // table rows to the appropriate table. This senerio would 
                   // require just 1 iteration through the array. No need to sort
                if(currentQuarter != result[i].quarter){
                    const trq = document.createElement('tr');
                    const tdq = document.createElement('td');
                    currentQuarter = result[i].quarter;
                    tdq.textContent = `Quarter ${currentQuarter}`;
                    
                    trq.appendChild(tdq);
                    trq.className = 'quarter';     
                    tBody.appendChild(trq);
                }

                const tr = document.createElement('tr');
                const td = document.createElement('td');
                td.textContent = `${result[i].id}:   ${result[i].name}  (${result[i].credits} credits)`;
                tr.appendChild(td);
                tr.className = 'closed';
                tr.id = result[i].id;

                // pg. 524 - json
                // console.log("not stringified: " + result[i].prerequisites);             //CSD 111,CSD 112
                // console.log("stringified: " + JSON.stringify(result[i].prerequisites)); //["CSD 111","CSD 112"]
                
                //tr.dataset.prerequisites = JSON.stringify(result[i].prerequisites);
                tr.dataset.prerequisites = result[i].prerequisites;
                tr.dataset.requiredBy = result[i].required_by;
                tr.dataset.corequisites = result[i].corequisites;

                
                tr.addEventListener('click', function(e) {
                    //console.log(e.currentTarget.id)
                    clicked(e);
                });
                tBody.appendChild(tr);
            }
    
        })
        .catch((error) => {
            console.error(error);
        });
}

/**
 * This function sets the background color for the classes that don't require
 * a prerequisite and allows the user to select one.
 */
function start(){
    // I need to traverse the table and any tr without prerequisites will be 
    // turned white.
    const rows = document.getElementsByTagName('tr');
    //console.log(rows);
    for(let i = 0; i < rows.length; i++){
       // console.log(rows[i].className);

        if(rows[i].className != 'quarter'){
            const prerequisites = rows[i].dataset.prerequisites;
            if (!prerequisites || prerequisites === '[]') {            
                rows[i].className = 'open';
            }
        }
    }
}

function clicked(event){
    // console.log(event);
    // console.log( event.target.id);
    // console.log( event.currentTarget.id);
    
    const tr = document.getElementById(event.currentTarget.id);
    // console.log(tr);

    if(tr.className != 'closed'){
        if(tr.className == 'open'){
            tr.className = 'taken';
                let courses = tr.dataset.requiredBy.split(',');
                //let a = array.split(',');
                console.log(courses);
                if( courses[0] == "")  // i think this is kind of ugly
                    return;
                // open of courses    
                courses.forEach(element => {
                    const row = document.getElementById(element);
                    row.className = 'open';
                });
           
        } else { // class has been taken and now must be reversed.
            // TODO: implement closing required_by;
            tr.className = "open";
            reverseOpenCourses(tr.dataset.requiredBy);
        }
    }
    else 
        console.log(tr.className);
}

function reverseOpenCourses(requiredBy){
    console.log(requiredBy);
    let courses = requiredBy.split(',');


    if( courses == ""){
        return;
    }

    courses.forEach(id => {
        const course = document.getElementById(id);

        course.className = "closed";

        reverseOpenCourses(course.dataset.requiredBy);
    });
    
}   

// pg. 418
// this will add an event listener that will trigger when the dom in completely
// loaded
document.addEventListener('DOMContentLoaded',init);