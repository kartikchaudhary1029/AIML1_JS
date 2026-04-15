let employees = [];
function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = Number(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (!name || !id || !salary || !dept) {
        alert("Please fill in all fields!");
        return;
    }

    let emp = { name, id, salary, dept };
    employees.push(emp);
    document.querySelectorAll("input").forEach(i => i.value = "");
    document.getElementById("output").innerHTML = `<b style="color: green;">✔ ${name} added successfully!</b>`;
}
function displayEmployees() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No employees in the database.";
        return;
    }
    let result = "<h4>Employee List:</h4>";
    employees.forEach(emp => {
        result += `
        <div class="emp-card">
            <b>Name:</b> {emp.name} | <b>ID:</b> {emp.id}<br>
            <b>Salary:</b> {emp.salary.toLocaleString()} | <b>Dept:</b> ${emp.dept}
        </div>`;
    });
    document.getElementById("output").innerHTML = result;
}
function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);
    let result = "<h4>High Earners (>50k):</h4>";
    
    if (filtered.length === 0) {
        result += "No records found.";
    } else {
        filtered.forEach(emp => {
            result += ` Rs{emp.name} (Rs{emp.salary.toLocaleString()})<br>`;
        });
    }
    document.getElementById("output").innerHTML = result;
}
function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = `<h3>Total Payout: Rs{total.toLocaleString()}</h3>`;
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No data to calculate average.";
        return;
    }
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;
    document.getElementById("output").innerHTML = `<h3>Average Salary: Rs{avg.toFixed(2)}</h3>`;
}
function countDepartment() {
    let deptName = document.getElementById("searchDept").value;
    if (!deptName) {
        alert("Please enter a department name.");
        return;
    }
    let count = employees.filter(emp => emp.dept.toLowerCase() === deptName.toLowerCase()).length;
    document.getElementById("output").innerHTML = `Found <b>${count}</b> employee(s) in the <b>${deptName}</b> department.`;
}