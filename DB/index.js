Normalization
// Normalization is the process of organizing data in a database to reduce redundancy  (splits data into multiple tables.)
// and improve data integrity. It involves dividing large tables into smaller, 
// related tables and defining relationships between them.

//    1NF, 2NF, 3NF. - Normal Form(NF

// CREATE TABLE orders (
//     order_id INT PRIMARY KEY,
//     customer_id INT,
//     total DECIMAL(10,2),
//     FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
//   );

Denormalization // ( Stores related data in a single document.)
// While normalization reduces redundancy, sometimes denormalization is used for performance reasons: ()
// Purposefully introducing redundancy to improve read performance
// Common in data warehouses and reporting databases
// Used in NoSQL databases like MongoDB where joins are expensive

// {
//     _id: "order123",
//     customer: {
//       name: "John Doe",
//       email: "john@example.com"
//     },
//     items: [
//       { product: "Pen", price: 1.50, quantity: 2 },
//       { product: "Notebook", price: 3.00, quantity: 1 }
//     ],
//     total: 6.00
//   }


// Aspect	              SQL Databases.        	     MongoDB
// ---------------------------------------------------------------------------------------
// Default approach	  Highly normalized.      	     Often denormalized
// Relationships	      Foreign keys and joins	     Embedded documents or references
// Performance	          Joins can be expensive	     Reads faster for embedded data
// Flexibility.          Schema changes can be costly	 Schema-flexible
// Best for	          Complex transactions/reporting Hierarchical, read-heavy workloads


Indexing
// Indexing is a fundamental database optimization technique that significantly 
// improves query performance by creating specialized data structures that allow faster data retrieval

Aggregation
// Aggregation is a powerful database operation that processes data records and returns computed results. 
// Both SQL and NoSQL databases provide aggregation capabilities, but with different approaches and syntax.
SQL Aggregation
// SQL uses GROUP BY clauses with aggregate functions to perform data summarization:
MONGO Aggregation
// MongoDB uses an aggregation pipeline approach:
// Processes documents through a sequence of stages
// Each stage transforms the documents
// Supports complex data reshaping

// $match - Filters documents (like WHERE)
// $group - Groups documents by expression
// $project - Reshapes documents (like SELECT)
// $sort - Orders documents
// $limit - Restricts document count
// $lookup - Performs left outer join