import * as express from 'express'
import { Request, Response, NextFunction } from 'express'
import * as bodyParser from "body-parser"

const app = express();
const users: Array<any> = require('../users.json');

app.use(bodyParser());

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res, next) => {
  const userId = req.params["id"];
  res.send(users.find(item => item.id == userId));
});

app.post('/users/add', (req, res, next) => {
  const user = {
    id: Math.floor(Math.random() * 10000000000000001).toString(),
    name: req.body.name,
    password: req.body.password,
    dateOfBirth: req.body.dateOfBirth,
    dateOfFirstLogin: (new Date).toISOString(),
    dateOfNextNotification: (new Date).toISOString(),
    information: req.body.information
  }
  users.push(user);
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
    password: req.body.password||users[index].password,
    dateOfBirth: req.body.dateOfBirth||users[index].dateOfBirth,
    dateOfFirstLogin: req.body.dateOfFirstLogin||users[index].dateOfFirstLogin,
    dateOfNextNotification: req.body.dateOfNextNotification||users[index].dateOfNextNotification,
    information: req.body.information||users[index].information
  }
  res.send(users);
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
  res.status(404).send('ID Not Found on Server');
});

app.listen(3030, () => {
  console.log('Example app listening on port 3030!');
});