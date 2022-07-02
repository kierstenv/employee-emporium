import mysql from 'mysql2';
import inquirer from 'inquirer';
import consoleTable from 'console.table';
// const express = require('express')
// const app = express()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ro0tsUx22!1!',
  database: 'company'
});

connection.connect(err => {
  if (err) {
    return console.log(err);
  }
  console.log('Connected to the database');
  actionPrompt()
});

function actionPrompt(){
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role'
      ]
    }
  ]).then(answers => {
    switch (answers.action) {
      case 'View all departments':
        viewDepartments();
        break;
      case 'View all roles':
        viewRoles();
        break;
      case 'View all employees':
        viewEmployees();
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'Update an employee role':
        updateEmployeeRole();
        break;
    }
  })
};

const viewDepartments = () => {
  connection.query('SELECT * FROM departments', (err, data) => {
    if (err) throw err;
    console.table(data)
    connection.end()
  })
}

const viewRoles = () => {
  connection.query('SELECT * FROM roles', (err, data) => {
    if (err) throw err;
    console.table(data)
    connection.end()
  })
}

const viewEmployees = () => {
    connection.query('SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, departments.name AS department FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id', (err, data) => {
    if (err) throw err;
    console.table(data)
    connection.end()
  })
}

const addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the department?'
    }
  ]).then(answers => {
    connection.query('INSERT INTO departments SET ?', {name: answers.name}, (err, data) => {
      if (err) throw err;
    })
    viewDepartments()
  })
}

const addRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the role?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary of the role?'
    },
    {
      type: 'list',
      name: 'department_id',
      message: 'What department does the role belong to?',
      choices: [
        '1',
        '2',
        '3',
        '4',
        '5'
      ]
    }
  ]).then(answers => {
    connection.query('INSERT INTO roles SET ?', {title: answers.title, salary: answers.salary, department_id: answers.department_id}, (err, data) => {
      if (err) throw err;
    })
    viewRoles()
  })
}

const addEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the first name of the employee?'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the last name of the employee?'
    },
    {
      type: 'number',
      name: 'role_id',
      message: 'What role id does the employee have?',
      choices: [
        '1',
        '2',
        '3',
        '4',
        '5'
      ],
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        console.log('\nPlease enter the role id number!');
      }
    }
  ]).then(answers => {
    connection.query('INSERT INTO employees SET ?', {first_name: answers.first_name, last_name: answers.last_name, role_id: answers.role_id}, (err, data) => {
      if (err) throw err;
    })
    viewEmployees()
  })
}

const updateEmployeeRole = () => {
  inquirer.prompt([
    {
      type: 'number',
      name: 'employee_id',
      message: 'What is the employee id number?',
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        console.log('\nPlease enter the employee id number!');
      }
    },
    {
      type: 'number',
      name: 'role_id',
      message: 'What is the role id number?',
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        console.log('\nPlease enter the role id number!');
      }
    }
  ]).then(answers => {
    connection.query('UPDATE employees SET role_id = ? WHERE id = ?', [answers.role_id, answers.employee_id], (err, data) => {
      if (err) throw err;
    })
    viewEmployees()
  })
}
