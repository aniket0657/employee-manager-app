let employees = [];
let idCounter = 1;

function addEmployee() {
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();
  const messageDiv = document.getElementById("message");

  if (!name || !profession || !age) {
    messageDiv.textContent = "Error: All fields are required!";
    messageDiv.className = "message error";
    return;
  }

  const newEmployee = {
    id: idCounter++,
    name,
    profession,
    age: parseInt(age),
  };

  employees.push(newEmployee);

  messageDiv.textContent = "Success: Employee added!";
  messageDiv.className = "message success";

  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";

  renderEmployees();
}

function deleteEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  renderEmployees();
}

function renderEmployees() {
  const employeeList = document.getElementById("employeeList");
  employeeList.innerHTML = "";

  if (employees.length === 0) {
    employeeList.innerHTML = "<p>No employees added yet.</p>";
    return;
  }

  employees.forEach(emp => {
    const card = document.createElement("div");
    card.className = "employee-card";

    const info = document.createElement("div");
    info.className = "employee-info";
    info.textContent = `ID: ${emp.id} | Name: ${emp.name} | Profession: ${emp.profession} | Age: ${emp.age}`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete User";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => deleteEmployee(emp.id);

    card.appendChild(info);
    card.appendChild(delBtn);

    employeeList.appendChild(card);
  });
} 