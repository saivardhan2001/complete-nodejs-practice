const express = require('express');
const app = express();

app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const result = num1 + num2;
    res.send({ result });
});

app.get('/subtract/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const result = num1 - num2;
    res.send({ result });
});

app.get('/multiply/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const result = num1 * num2;
    res.send({ result });
});

app.get('/divide/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const result = num1 / num2;
    res.send({ result });
});

app.listen(3000, () => {
    console.log('Calculator API listening on port 3000!');
});
