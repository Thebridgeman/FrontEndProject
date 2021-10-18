// JSON data

let data = [
    {niNumber: "000000000", name: "Will Person", tel: "07000000000", address: "1 Main Street", dept: "Payments"},
    {niNumber: "000000001", name: "Bill Guy", tel: "07000000001", address: "2 Avenue Road", dept: "Digital"},
    {niNumber: "000000002", name: "Phill Empty", tel: "07000000002", address: "3 Road avenue", dept: "HR"},
    {niNumber: "000000003", name: "Gill Fish", tel: "07000000003", address: "4 High Street", dept: "Engineering"},
    {niNumber: "000000004", name: "Jill Joll", tel: "07000000004", address: "5 Another Street", dept: "HR"},
]

// display data from JSON

function display() {
    let parent = document.getElementById('tableBody');

    data.forEach(element => {
        let entry = document.createElement('tr');

        // creating elements for each value in table
        let niNumber = document.createElement('td');
        niNumber.innerText = element.niNumber; 

        let name = document.createElement('td');
        name.innerText = element.name; 

        let tel = document.createElement('td');
        tel.innerText = element.tel; 

        let address = document.createElement('td');
        address.innerText = element.address;

        let dept = document.createElement('td');
        dept.innerText = element.dept;

        // Edit button

        let edit = document.createElement('button');
        edit.type = 'button';
        edit.className ="btn btn-dark";
        edit.innerHTML = 'Edit';
        edit.onclick = function() {
            console.log("edit");
        }

        // delete button
        let del = document.createElement('button');
        del.type = 'button';
        del.className ="btn btn-light";
        del.innerHTML = 'Delete';
        del.onclick = function() {
            console.log("delete");
        }

        // adding elements for each value to the table to be displayed on the page

        let actions = document.createElement('td');
        actions.appendChild(edit);
        actions.appendChild(del);

        entry.appendChild(niNumber);
        entry.appendChild(name);
        entry.appendChild(tel);
        entry.appendChild(address);
        entry.appendChild(dept);
        entry.appendChild(actions);
        parent.appendChild(entry);
    })
};

function filter() {
    // filters the data by department

    // for loop for all things in the filtered array
}

display();

let visible = false;

function toggleVisibility() {
    let form = document.getElementById('add-form');

    if (visible != true) {
        form.style.display = "block";
        visible = true;
    } else {
        form.style.display = "none";
        visible = false;
    }
}