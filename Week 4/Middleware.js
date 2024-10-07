// Task  1
// Create a basic Express server that: ◦ Logs every incoming request using a custom logging middleware. ◦ Uses express.json() to handle JSON request bodies. ◦ Protects a specific route (e.g., /dashboard ) with authentication middleware that checks for an authorization token.


const express = require("express");
const app = express();

const logger= (req, res, next => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});
app.use(logger);


app.use((req, res, next) => {
    console.log("This is a functional middleware");
    next();
});
app.use(express.json());


const authentication = (req, res, next) => {
    if (req.headers.authorization === "SycamoreMentorship") {
        next();
    } else {
        res.status(403).send("Youre not a Sytizen!");
    }
};
app.get("/dashboard", authentication, (req,res) => {
    res.send("Welcome back Sytizen!");
});

app.use(authentication);

