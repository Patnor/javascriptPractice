function init(){
    const data = fetch('../data/CSD425Courses.json')
            .then((response) => {
                console.log(response.status);
                console.log(response.bodyUsed);
                console.log(response.text);
                return response.json();
            })
            .then(result => {
                const tBody = document.getElementById("tbl_courses");
                const tr = document.createElement('tr');
                const td = document.createElement('td')
               // td.textContent = result[0].id + ": " + result[0].name + " (credits " + result[0].credits + ")";
                td.textContent = `${result[0].id}:   ${result[0].name}  (${result[0].credits} credits)`;
                tr.appendChild(td);
                tr.className = 'unavailable';
                tr.addEventListener('click', clicked);
                tBody.appendChild(tr);
            })
            .catch((error) => {
                console.error(error);
            });
    

    //console.log(response.json());
}

function clicked(){

}

document.addEventListener('DOMContentLoaded',init);