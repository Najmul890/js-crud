
let data=[
  {id:1,name:"hossen", email:"hossen@gmail.com"},
  {id:2,name:"sakib", email:"sakib@gmail.com"},
]

function readAll() {
  let tableElement = document.querySelector(".table-data");
  let elements = "";

  data.reverse().map(
    (user) =>
      (elements += `
        <tr> 
            <td>${user.name}</td>
            <td>
                <div class="mx-3">${user.email}</div>
            </td>
            <td>
                <button onclick="editBtn(${user.id})" class="btn btn-sm btn-primary">Edit</button>
                <button onclick="deleteUser(${user.id})" class="btn btn-sm btn-danger">Delete</button>
            </td>
       </tr>
    `)
  );
  tableElement.innerHTML = elements;
}

function create() {
  document.querySelector(".create-form").style.display = "block";
  document.querySelector(".add-btn").style.display = "none";
}

function addUser() {
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const id = data.length+ 1;
  data.push({ id, name, email });
  
  document.querySelector(".create-form").style.display = "none";
  document.querySelector(".add-btn").style.display = "block";

  readAll();
}

function editBtn(id) {
  document.querySelector(".add-btn").style.display = "none";
  document.querySelector(".update-form").style.display = "block";
  document.querySelector(".create-form").style.display = "none";

  const user = data.find((u) => u.id == id);
  document.querySelector(".uid").value = user.id;
  document.querySelector(".uname").value = user.name;
  document.querySelector(".uemail").value = user.email;


}

function updateUser() {
  const id = parseInt(document.querySelector(".uid").value);
  const name = document.querySelector(".uname").value;
  const email = document.querySelector(".uemail").value;

  const index = data.findIndex((user) => user.id == id);
  data[index] = { id, name, email };

  console.log('updating');
  console.log(data);
  document.querySelector(".add-btn").style.display = "block";
  document.querySelector(".update-form").style.display = "none";

  readAll();
}

function deleteUser(id) {
  data = data.filter((user) => user.id !== id);
  console.log(data);
  readAll();
}

console.log(data);

readAll();
