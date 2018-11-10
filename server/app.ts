import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from "body-parser";

//const cors = require('cors');
const app = express();
const users = <User[]>require('../users.json');

interface User {
    id: string;
    name: string;
    age: number;
    password: string;
    dateOfBirth: string;
    dateOfFirstLogin: string;
    dateOfNextNotification: string;
    information: string;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res, next) => {
  const userId = req.params["id"];
  const user = users.find(item => item.id == userId);
  if (user == undefined) {
    next(res);
  }
  res.send(user);
});

app.post('/users/add', (req, res, next) => {
  const user = {
    id: Math.floor(Math.random() * 10000000000000001).toString(),
    name: req.body.name,
    age: req.body.age,
    password: req.body.password,
    dateOfBirth: req.body.dateOfBirth,
    dateOfFirstLogin: (new Date).toISOString(),
    dateOfNextNotification: (new Date).toISOString(),
    information: req.body.information
  }
  users.push(user);
  res.send(user);
});

app.post('/login', (req, res, next) => {
  const name = req.body.name;
  const password = req.body.password;
  const user = users.find(item => (item.name == name && item.password == password));
  res.send(user);
});

app.put('/users/:id', (req, res, next) => {
  const userId = req.params["id"];
  const index = users.findIndex(item => item.id == userId);
  if (index == -1) {
    next(res);
  }
  users[index] = {
    id: userId,
    name: req.body.name||users[index].name,
    age: req.body.age||users[index].age,
    password: req.body.password||users[index].password,
    dateOfBirth: req.body.dateOfBirth||users[index].dateOfBirth,
    dateOfFirstLogin: req.body.dateOfFirstLogin||users[index].dateOfFirstLogin,
    dateOfNextNotification: req.body.dateOfNextNotification||users[index].dateOfNextNotification,
    information: req.body.information||users[index].information
  }
  res.send(users[index]);
});

app.put('/restore/:name', (req, res, next) => {
  const userName = req.params["name"];
  const index = users.findIndex(item => item.name == userName);
  if (index == -1) {
    next(res);
  }
  users[index] = {
    id: req.body.id||users[index].id,
    name: userName,
    age: req.body.age||users[index].age,
    password: req.body.password||users[index].password,
    dateOfBirth: req.body.dateOfBirth||users[index].dateOfBirth,
    dateOfFirstLogin: req.body.dateOfFirstLogin||users[index].dateOfFirstLogin,
    dateOfNextNotification: req.body.dateOfNextNotification||users[index].dateOfNextNotification,
    information: req.body.information||users[index].information
  }
  res.send(users[index]);
});

app.get('/users/search/:name', (req, res, next) => {
  const userName = req.params["name"];
  const usersByName = users.filter(item => item.name == userName);
  /*if (!!usersByName) {
    next(res);
  }*/
  res.send(usersByName);
});

app.delete('/users/:id', (req, res, next) => {
  const userId = req.params["id"];
  const index = users.findIndex(item => item.id == userId);
  if (index == -1) {
    next(res);
  }
  users.splice(index, 1);
  res.send(users);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => { 
  console.error(err.stack);
  /*res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();*/
  res.send('ID Not Found on Server. Status code: ' + res.statusCode);
});

app.listen(3030, () => {
  console.log('Example app listening on port 3030!');
});