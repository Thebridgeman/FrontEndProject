// JSON data

let data = [
    {niNumber: "000000000", name: "Will Person", tel: "07000000000", address: "1 Main Street", dept: "Payments"},
    {niNumber: "000000001", name: "Bill Guy", tel: "07000000001", address: "2 Avenue Road", dept: "Digital"},
    {niNumber: "000000002", name: "Phill Empty", tel: "07000000002", address: "3 Road avenue", dept: "HR"},
    {niNumber: "000000003", name: "Gill Fish", tel: "07000000003", address: "4 High Street", dept: "Engineering"},
    {niNumber: "000000004", name: "Jill Joll", tel: "07000000004", address: "5 Another Street", dept: "HR"},
]

//  track  the form
let parent = document.getElementById('tableBody');

//  display data
function display(arr) {
    parent.innerHTML = ""; // clear form

    arr.forEach(element => {
        let entry = document.createElement('tr');
        entry.className = "item";

        // creating elements for values in table
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

        // edit button

        let editbutton = document.createElement('button');
        editbutton.type = 'button';
        editbutton.className ="btn btn-dark"; 
        editbutton.innerHTML = 'Edit';
        editbutton.onclick = function() {
            editData(element.niNumber);
        }

        // delete button
        let del = document.createElement('button');
        del.type = 'button';
        del.className ="btn btn-light";
        del.innerHTML = 'Delete';
        del.onclick = function() {
            deleteData(element.niNumber);
        }

        // adding elements for each value to the table

        let actions = document.createElement('td');
        actions.appendChild(editbutton);
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

display(data);

function filter() {
    let input = document.getElementById('filter').value;
    
    // filter data by department
    if(input == "All"){
        display(data);
    }
    else {
    
        let result = data.filter(item => item.dept == input);

        display(result);
    }
}

// add form

let visible = false;

function toggleVisibility() {
    let form = document.getElementById('add-form');

    if (visible != true) {
        form.style.display = "block";
        visible = true;
    } else {
        document.getElementById('niNumber').value = '';
        document.getElementById('name').value = '';
        document.getElementById('tel').value = '';
        document.getElementById('address').value = '';
        document.getElementById('dept').value = '';

        form.style.display = "none";
        visible = false;
    }
} 

// add

function add() {
    let niNumber = document.getElementById('niNumber').value;
    let name = document.getElementById('name').value;
    let tel = document.getElementById('tel').value;
    let address = document.getElementById('address').value;
    let dept = document.getElementById('dept').value;

    let newInput = {niNumber: niNumber, name: name, tel: tel, address: address, dept: dept};
    data.push(newInput);

    display(data);
}

// delete 

function deleteData(value){
    for(let i = 0; i < data.length; i++){

        if(data[i].niNumber == value){
            data.splice(i, 1);
        }
    }
    display(data); 
} 

// edit

function editData(value){
    toggleVisibility();

    const result = data.find(element => element.niNumber == value);
    
    document.getElementById('niNumber').value = result.niNumber;
    document.getElementById('name').value = result.name;
    document.getElementById('tel').value = result.tel;
    document.getElementById('address').value = result.address;
    document.getElementById('dept').value = result.dept;
}

function saveEditedData() {
    let niNumber = document.getElementById('niNumber').value;
    let name = document.getElementById('name').value;
    let tel = document.getElementById('tel').value;
    let address = document.getElementById('address').value;
    let dept = document.getElementById('dept').value;

    let newInput = {niNumber: niNumber, name: name, tel: tel, address: address, dept: dept};

    for(let i = 0; i < data.length; i++) {
        if(data[i].niNumber == niNumber) {
            data[i] = newInput;
        }
    }
    
    toggleVisibility();
    display(data);
}
        
