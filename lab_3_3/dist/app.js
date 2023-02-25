"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.post('/users', (req, res) => {
    fetch('https://63f6855259c944921f7591df.mockapi.io', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
    })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
    });
});
app.get('/users', (req, res) => {
    fetch('https://63f6855259c944921f7591df.mockapi.io')
        .then(res => res.json())
        .then(json => res.send(json));
});
app.listen(3000, () => console.log('server started'));
