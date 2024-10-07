// Task 1
// Create an Express.js server that handles routes for a simple user management system.
// GET /users: Retrieve a list of users.
// POST /users: Create a new user.
// PUT /users/ : Update an existing user by ID.
// DELETE /users/ : Delete a user by ID.

const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Express server running on port 3000");
  });



app.get("/", (req, res) => {
  res.send("Welcome to User Management System");
});


app.get("/users", (req, res) => {
    res.json([
        {id: 1, name: "Sani Dogo", track: "Backend track"},
        {id: 2, name: "Daniel", track: "CTO"}
    ]);
});

app.get("/search", (req, res) => {
    const query = req.query.q;
    res.send(`Search results for: ${query}`);
});


app.use(express.json());

app.post("/users", (req, res) => {
    const user = req.body;
    res.json({message: "New user created: ", user});
});

app.put("/users/:id", (req, res) => {
    const user_id = req.params.id;
    const updated_data =req.body;
    res.json({message: `User with id ${user_id} updated succesfully`, updated_data});
});

app.delete("/users/:id", (req, res) => {
    const user_id = req.params.id;
    res.json({message: `User with id ${user_id} deleted succesfully`});
});