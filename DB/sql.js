JOIN
// JOIN operations combine rows from two or more tables based on related columns.

INNER JOIN
// Returns records with matching values in both tables
// ---
// SELECT orders.order_id, customers.customer_name
// FROM orders
// INNER JOIN customers ON orders.customer_id = customers.customer_id;

LEFT (OUTER) JOIN
// Returns all records from left table and matched records from right
// ---
// SELECT employees.name, departments.department_name
// FROM employees
// LEFT JOIN departments ON employees.dept_id = departments.dept_id;

RIGHT (OUTER) JOIN
// Returns all records from right table and matched records from left
// ---
// SELECT products.product_name, orders.order_date
// FROM orders
// RIGHT JOIN products ON orders.product_id = products.product_id;

FULL (OUTER) JOIN
// Returns all records when there's a match in either table
// SELECT students.student_name, courses.course_name
// FROM students
// FULL JOIN enrollments ON students.student_id = enrollments.student_id
// FULL JOIN courses ON enrollments.course_id = courses.course_id;

CROSS JOIN
// Returns Cartesian product of both tables

SELF JOIN
// Joins a table to itself

