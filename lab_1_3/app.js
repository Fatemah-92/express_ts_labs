const express = require('express');
const app = express();

//The express.js request object: represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
//Express.js req.query Property: An object containing a property for each query string parameter in the route.

//ex.1 simple using
app.get('/query', (req, res)=> {
    if(req.query.name == 'Fatemah') {
        res.send('Fatemah')
    } else {
        res.send('Not Found!')
    } 
})
//------------------------------------------

//ex.2 Using req.query Property with middleware 
const cond = (req, res, next)=> {
    if(req.query.add == "true") {
        next(); //If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function.
    }
    else {
        res.send('Not Failed');
    } 
}
const add = (req, res)=> {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    let result= 0;
    result = num1 + num2;
    res.send(`The result is ${result}`)
}
app.get('/add/:num1/:num2', cond, add)
//------------------------------------------

//ex.3 Using req.query Property with many choices
app.get('/cal/:num1/:num2', (req, res)=> {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    let result= 0;
    if(req.query.op == 'add') {
        result = num1 + num2;
    } else if(req.query.op == 'sub') {
        result = num1 - num2;
    } else if(req.query.op == 'div') {
        result = num1 / num2;
    } else if(req.query.op == 'mult') {
        result = num1 * num2;
    }
    res.send(`The result is ${result}`)
})


app.listen(3000, ()=> console.log('server started'))