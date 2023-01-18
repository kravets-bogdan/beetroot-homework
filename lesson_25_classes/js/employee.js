class Employee {
  name = 'default';
  age = 0;
  position = 'default';
  constructor(name, age, position) {
    if ((name, age, position)) {
      (this.name = name), (this.age = +age), (this.position = position);
    } else {
      throw new Error('Enter value');
    }
  }
}
const employee = new Employee('John', '24', 'Cashier');
const employee1 = new Employee('Alex', '32', 'Manager');
const employee2 = new Employee('Vick', '27', 'Super-manager');
const table = document.getElementById('table');

class EmpTable {
  constructor(empList) {
    this.empList = empList;
  }
  getHtml() {
    for (const element of this.empList) {
      console.log('element: ', element);
      const tr = document.createElement('tr');
      // const tdName = document.createElement('td');
      // const tdPosition = document.createElement('td');
      // const tdAge = document.createElement('td');

      // tdName
      Object.keys(element).forEach((k) => {
        const td = document.createElement('td');
        td.innerText = element[k];
        tr.appendChild(td);
      });

      table.appendChild(tr);
      // ! innerHTML !!!
      // tr.innerHTML = `<td>${element.name}</td><td>${element.position}</td><td>${element.age}</td>`;
    }
  }
}
const empList = new EmpTable([employee, employee1, employee2]);
empList.getHtml();

export { Employee, EmpTable };
