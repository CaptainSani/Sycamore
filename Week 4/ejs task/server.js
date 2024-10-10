const express = require("express");
const app = express();
const PORT = 3000;

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {title: 'Homepage', username: 'Sani'})
});


const renderUser = (req, res) => {
    const q = req.query
    const users = [
        {name: 'Mark',       age: 20},
        {name: 'Matthew',    age: 30},
        {name: 'John',       age: 40},
        {name: q.name,       age: q.age}];
        res.render('users', {users})
};
server.listen(PORT, () => {
    console.log('Server running on http://localhost:3000');
});
server.get('/users', renderUser)