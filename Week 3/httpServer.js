// Task 1
// Set up a simple HTTP server using the built-in Node.js http module.

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, and welcome to my page");
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Task 2
// Set up a basic Express.js server, and define routes for / (home) and /about .

const express = require("express"); 
const app = express(); 
app.get("/", (req, res) => { 
  res.send("Welcome to my Home page"); 
}); 
app.get("/about", (req, res) => {
  res.send("About page")
})
  app.listen(8080, () => { 
    console.log("Express server running on port 8080"); 
  });

  //Task 3
  // Compare the amount of code and simplicity between the Node.js HTTP server and the Express.js server.

  // - When setting up with the Node server, you'll have to write more code by manually setting the status code which will leaD to longer build time
  // - When setting up with Express, setting uop is done with less amount of code which makes builing faster.
  // - Routing with Express is easier than routing with Node.