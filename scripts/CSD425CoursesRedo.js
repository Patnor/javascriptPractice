function init(){
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
                tr.className = 'unavailable';
                // pg 417
                tr.addEventListener('click', clicked);
                tBody.appendChild(tr);
            }
    
        })
        .catch((error) => {
            console.error(error);
        });
}



function clicked(){
    alert("Clicked");
}

// pg. 418
document.addEventListener('DOMContentLoaded',init);