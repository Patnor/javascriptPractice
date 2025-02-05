

const mainElement = document.getElementById('main');

// if(mainElement !== null){
//     mainElement.className = 'border';
// }

 mainElement && (mainElement.className = 'border');

//mainElement?.className = 'border';

const tableRows = document.getElementsByClassName('row even');

if(tableRows.length > 0){
    for(let i = 0; i < tableRows.length; i++){
        const tableRow = tableRows[i];
        tableRow.style.backgroundColor = "#CCcCCC";
    }
}

const tableRowsOdd = document.getElementsByClassName("row odd");

if(tableRowsOdd.length > 0){
    for(let i = 0; i < tableRowsOdd.length; i++){
        const tableRow = tableRowsOdd.item(i);
        tableRow.style.backgroundColor = "#f456b1"
    }
}

Array.prototype.forEach.call(tableRowsOdd, (tableRow2) => {
    tableRow2.style.backgroundColor = "green";});



const tableCells = document.getElementsByTagName("td");

if(tableCells.length > 0){
    for(let i = 0; i < tableCells.length; i++){
        const cell = tableCells.item(i);
        cell.style.fontFamily = "Veranda";
        cell.style.fontSize = "20pt";
    }
}

const inputElementsForGenre = document.getElementsByName("genre");
Array.prototype.forEach.call(inputElementsForGenre, (inputElement) => {
    console.log(inputElement.value);
} )



const tableCell = document.querySelector("#main table td:nth-child(2)");
tableCell.style.border = "thick solid red";

const allTableCells = document.querySelectorAll("#main table td:nth-child(1)");
if(allTableCells.length > 0){
    for(let i = 0; i < allTableCells.length; i++){
        const tableC = allTableCells[i];
        tableC.style.border = "thick solid blue";
    }
}

const table = document.querySelector("table");

console.log("parent element: " + table.parentElement.id);
console.log("parent node: " + table.parentNode.nodeName);


const tbody = document.querySelector('tbody');


console.log(tbody.children.length);
console.log(tbody.childElementCount);
console.log(tbody.childNodes.length);
console.log(tbody.hasChildNodes());

const tbody2 = document.querySelector('tbody');

console.log(tbody2.firstChild);  // Text node
console.log(tbody2.lastChild); // Text node 
console.log(tbody2.firstElementChild); // element <tr>
console.log(tbody2.lastElementChild); // element <tr>

const tc = document.querySelector('tbody tr:nth-child(2)');
console.log(tc.previousSibling); // Text node
console.log(tc.nextSibling); // Text node
console.log(tc.previousElementSibling); // <tr>
console.log(tc.nextElementSibling); // <tr>


const formsList = document.forms;

if(formsList.length > 0){
    for(let i = 0; i < formsList.length; i++){
        console.log(formsList[i]);

        const fields = formsList[i].getElementsByTagName('fieldset');
        console.log(fields.length);
        
        for(let j = 0; j < fields.length; j++){
            console.log(fields[j]);
            const ele = fields[j].getElementsByTagName('input')

            Array.prototype.forEach.call(ele, (field) => {
                console.log(field.value);
            })
        }


    }
}

const textContent = document.querySelector('#news li:nth-child(1').textContent;
console.log(textContent);

const recordNews = document.querySelector('#news li:nth-child(1)');
recordNews.textContent = "Record news: New album by Tool is delayed.";

const recordNewsUpdate = document.querySelector("#news li:nth-child(1)");
recordNewsUpdate.innerHTML = "<strong>Record news: </strong> New album by <em>Patrick</em> to be released.";

const elem1 = document.getElementById('main');
const newNode = document.createTextNode("Example");
elem1.appendChild(newNode);

