const contacts = [
    {
        firstName: 'Wayne',
        lastName: 'Hug',
        email: 'email.com'
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@org.edu'
    },
    {
        firstName: 'Patrick',
        lastName: 'Normile',
        email: 'patnor22@gmail.com'
    },
    {
        firstName: 'Sammy',
        lastName: 'Normile',
        email: 'sammy@email.com'
    }
];

const tableData = document.querySelector('table');
console.log(Object.getPrototypeOf(tableData));
console.log(tableData.caption);
console.log(tableData.tHead);
console.log(tableData.tBodies);
console.log(tableData.rows);
console.log(tableData.tFoot);


function createTable(){
    
    const tableBody = document.querySelector('#contact-tb tbody');
    for(let i = 0; i < contacts.length; i++){
        const contact = contacts[i];
        //console.log(contact.email);

        const tr = document.createElement('tr');

        const tdFirst = document.createElement('td');
        const firstName = document.createTextNode(contact.firstName);
        tdFirst.appendChild(firstName);

        const tdLast = document.createElement('td');
        const lastName = document.createTextNode(contact.lastName);
        tdLast.appendChild(lastName);

        const tdEmail = document.createElement('td');
        const email = document.createTextNode(contact.email);
        tdEmail.appendChild(email);

        tr.appendChild(tdFirst);
        tr.appendChild(tdLast);
        tr.appendChild(tdEmail);

        tableBody.appendChild(tr);

    }
}

function sortByFirstName(){
    const tableBody = document.querySelector('#contact-tb tbody');

    while(tableBody.firstChild != null){
        tableBody.removeChild(tableBody.firstChild);
    }

    contacts.sort(function(contact1, contact2){
        return contact1.firstName.localeCompare(contact2.firstName);
    })

    createTable();
}

function createContact(){
    const newRow = tableData.insertRow(1);
    const newCellFirstName = newRow.insertCell(0);
    newCellFirstName.textContent = "tob";
    
    const newCellLastName = newRow.insertCell(1);
    newCellLastName.textContent = "newHart";
    
    const newCellEmail = newRow.insertCell(2);
    newCellEmail.textContent = "email.ocm";
}



const aEle = document.getElementById('home');
console.log("id: " + aEle.getAttribute('id'));
console.log("class: " + aEle.getAttribute('class'));
console.log("href: " + aEle.getAttribute('href'));

console.log(aEle.id);
console.log(aEle.className);
console.log(aEle.href);

const button = document.getElementById("create");
console.log(button.onclick);

console.log(typeof button.onclick);
console.log(button.getAttribute('onClick'));
console.log(typeof button.getAttribute('onClick'));

console.log(button.style);
console.log(typeof button.style);
console.log(button.getAttribute('style'));
console.log(typeof button.getAttribute('style'));


const elementLink = document.getElementById('home');

elementLink.setAttribute('class', 'link active');
elementLink.setAttribute('href', 'selectionOfElements.html')
elementLink.setAttribute('target', '_blank');

elementLink.className = 'link active highlighted';
elementLink.href = 'index.html';
elementLink.target = '_self';


