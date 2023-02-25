"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const data_json_1 = __importDefault(require("./data.json"));
app.use(express_1.default.json());
;
//1. GET data
app.get('/users', (req, res) => {
    res.json(data_json_1.default);
});
//2. DELETE item in data
app.delete('/users/:name', (req, res) => {
    let newArr; //: User[];
    newArr = data_json_1.default.filter(value => {
        if (req.params.name != value.name) {
            return value;
        }
    });
    res.json(newArr);
});
//3. CREATE new item for data
app.post('/users', (req, res) => {
    data_json_1.default.push({
        "name": req.body.name,
        "age": req.body.age
    });
    res.json(data_json_1.default);
});
//4. UPDATE an item in data
app.put('/users/:name', (req, res) => {
    for (let i in data_json_1.default) {
        if (req.params.name == data_json_1.default[i].name) {
            data_json_1.default[i].name = req.body.name;
            data_json_1.default[i].age = req.body.age;
        }
    }
    res.send(data_json_1.default);
});
app.listen(3000, () => console.log('server started'));
