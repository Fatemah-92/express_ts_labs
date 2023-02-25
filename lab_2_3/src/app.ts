import express,{ Application, Request, Response } from "express";
const app: Application = express();
import data from './data.json';

app.use(express.json());

//Using CRUD to local data, with Express.js and Typescript

/*
interface User {
    name: string,
    age: number
};
*/

//1. GET data
app.get('/users', (req, res)=> {
    res.json(data);
})

//2. DELETE item in data
app.delete('/users/:name', (req: Request, res: Response)=> {
    let newArr //: User[];
    newArr = data.filter(value => {
        if(req.params.name != value.name){
            return value;
        }
    })  
    res.json(newArr);
})

//3. CREATE new item for data
app.post('/users', (req: Request, res: Response)=> {
    data.push({
        "name": req.body.name,
        "age": req.body.age
    } )
    res.json(data);
})

//4. UPDATE an item in data
app.put('/users/:name', (req: Request, res: Response)=> {
    for(let i in data) {
        if(req.params.name == data[i].name){
            data[i].name = req.body.name
            data[i].age = req.body.age
        }
    }
    res.send(data);
})

app.listen(3000, ()=> console.log('server started'))