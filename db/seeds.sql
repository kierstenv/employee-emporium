INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Mary', 'Jane', 1, NULL),
('Swag', 'Money', 2, NULL),
('Steven', 'Paul', 3, NULL),
('John', 'Lennon', 4, NULL),
('Patrick', 'Star', 5, NULL),
('Olivia', "L'Ador", 6, NULL),
('Bob', 'Joe', 7, NULL),
('Moe', 'Doe', 8, NULL);

INSERT INTO departments (name)
VALUES
('IT'),
('HR'),
('Finance'),
('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES
('Developer', 70000, 1),
('Lead Engineer', 90000, 1),
('Director', 100000, 2),
('Supervisor', 90000, 2),
('Accountant', 30000, 3),
('Design Manager', 50000, 4),
('Marketer', 40000, 4),
('Salesperson', 60000, 4);