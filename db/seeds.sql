INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Smith', 1, NULL),
('Jane', 'Smith', 2, NULL),
('Bob', 'Smith', 3, NULL),
('Mary', 'Smith', 4, NULL),
('John', 'Doe', 5, NULL),
('Jane', 'Doe', 6, NULL),
('Bob', 'Doe', 7, NULL),
('Mary', 'Doe', 8, NULL);

INSERT INTO department (name)
VALUES
('IT'),
('HR'),
('Finance'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Manager', 90000, 2),
('Developer', 70000, 1),
('Designer', 50000, 4),
('Accountant', 30000, 3),
('Engineer', 90000, 1),
('Salesperson', 60000, 4),
('Marketer', 40000, 4),
('Director', 100000, 2);