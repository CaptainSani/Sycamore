const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Sycamore",
  password: "1234567890",
  port: 5432,
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to DB", err);
  } else {
    console.log("Connected to DB", res.rows);
  }
});

// Create table
pool.query(
  `CREATE TABLE IF NOT EXISTS products ( id SERIAL PRIMARY KEY, name VARCHAR(100), description VARCHAR(100) UNIQUE, price INT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ); `,
  (err, res) => {
    if (err) {
      console.error("Error creating table:", err);
    } else {
      console.log("Table created successfully");
    }
  }
);

// Insert into table
const insertProduct = (name, description, price) => {
  const query = "INSERT INTO products (name, description, price) VALUES ($1, $2, $3)";
  const values = [name, description, price];
  pool.query(query, values, (err, res) => {
    if (err) {
      console.error("Error inserting data:", err);
    } else {
      console.log("Product inserted successfully");
    }
  });
};

insertProduct("iPhone 16", "Apple product", 100000);
insertProduct("iPhone 15", "Apple", 50000);


// Update data
const updateProduct = (id, newPrice) => {
  const query = "UPDATE products SET price = $1 WHERE id = $2";
  const values = [newPrice, id];
  pool.query(query, values, (err, res) => {
    if (err) {
      console.error("Error updating product:", err);
    } else {
      console.log("Product updated successfully");
    }
  });
};
updateProduct(1, 500000);

// Delete data

const deleteProduct = (name) => {
  const query = "DELETE FROM products WHERE name = $1";
  const values = [name];
  pool.query(query, values, (err, res) => {
    if (err) {
      console.error("Error deleting product:", err);
    } else {
      console.log("Product deleted successfully");
    }
  });
}; 
deleteProduct('iPhone 16');
