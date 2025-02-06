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

// this function runs when the page is loaded.
function init(){
    const startButton = document.getElementById('btn_start');
    startButton.addEventListener('click', start, false);
    // pg 550 fetch info
    const data = fetch('../data/CSD425Courses.json')
        .then((response) => {
            console.log(response.status);
            console.log(response.bodyUsed);

            return response.json();
        })
        .then(result => {

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
            const tBody = document.getElementById("tbl_courses");
            
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

                console.log("not stringified: " + result[i].prerequisites);
                console.log("stringified: " + JSON.stringify(result[i].prerequisites));
                
                tr.dataset.prerequisites = JSON.stringify(result[i].prerequisites);
                // pg 417
                // author suggests this is a better way to add event handler
                // it completely separates code from the HTML.
                tr.addEventListener('click', clicked);
                tBody.appendChild(tr);
            }
    
        })
        .catch((error) => {
            console.error(error);
        });
}

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

function clicked(){
    alert("Clicked");
}

// pg. 418
document.addEventListener('DOMContentLoaded',init);