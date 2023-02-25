import express,{ Application, Request, Response } from "express";
const app: Application = express()


app.get('/users', (req: Request, res: Response)=> {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => res.send(json))
})

app.listen(3000, ()=> console.log('server started'));