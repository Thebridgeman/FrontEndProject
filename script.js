// JSON data

let data = [
    {niNumber: "000000000", name: "Will Person", tel: "07000000000", address: "1 Main Street", dept: "Payments"},
    {niNumber: "000000001", name: "Bill Guy", tel: "07000000001", address: "2 Avenue Road", dept: "Digital"},
    {niNumber: "000000002", name: "Phill Empty", tel: "07000000002", address: "3 Road avenue", dept: "HR"},
    {niNumber: "000000003", name: "Gill Fish", tel: "07000000003", address: "4 High Street", dept: "Engineering"},
]

// display data from JSON

function display() {
    let parent = document.getElementById('tableBody');

    // Loop through all data elements
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

        // adding elements for each value to the table 
        entry.appendChild(niNumber);
        entry.appendChild(name);
        entry.appendChild(tel);
        entry.appendChild(address);
        entry.appendChild(dept);

        parent.appendChild(entry);
    })
};

display();