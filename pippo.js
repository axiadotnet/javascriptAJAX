let employees = [
    {id:"pl547", name: "Pippo", surname: "Limetti", department:"montaggio", serviceTime:7, dob:new Date(1988, 5, 3)},
    {id:"pp578", name: "Pluto", surname: "Porcile", department:"stoccaggio", serviceTime:5, dob:new Date(1983, 6, 3)},
    {id:"pt540", name: "Paperino", surname: "Tebaldi", department:"montaggio", serviceTime:2, dob:new Date(1978, 5, 1)},
    {id:"mg547", name: "Minnie", surname: "Giorgi", department:"vendita", serviceTime:1, dob:new Date(1989, 5, 5)}
];




let tableHead = document.getElementById("employees-table-head")
let tableBody = document.getElementById("employees-table-body")


let headRow = document.createElement('TR');
tableHead.appendChild(headRow);
Object.keys(employees[0]).forEach(key => {
    let th = document.createElement('TH')
    th.width = '200';
    th.appendChild(document.createTextNode(key));
    headRow.appendChild(th);
});





for (i = 0; i < employees.length; i++) {
    let bodyRow = document.createElement('TR');
    for (let key in employees[i]) {
        let td = document.createElement('TD')
        let node;
        if(key === "dob"){
            node = document.createTextNode(formatDate(employees[i][key]));
        } else {
            node = document.createTextNode(employees[i][key]);
        }
        td.appendChild(node);
        bodyRow.appendChild(td)
    }
    tableBody.appendChild(bodyRow);
}


function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join(' : ');
}



// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     console.log(this.readyState+this.status)
//   if (this.readyState == 4 && this.status == 200) {
//     let pippo = JSON.parse(this.responseText);
//     console.log(pippo);
//   }
// };
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
// xhttp.send();


// $.getJSON("https://jsonplaceholder.typicode.com/posts", function(result){
//     console.log(result)
//   });

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(pippo => {
      let list = document.getElementById("post-list")
      for (let i = 0; i < pippo.length; i++) {
          const post = pippo[i];
          console.log(post.title);
          let listElement = document.createElement("LI");
          listElement.className = "list-group-item"
          let textNode = document.createTextNode(post.title);
          listElement.appendChild(textNode);
          list.appendChild(listElement)
      }
      })
  .catch(error=> console.log(error))

  