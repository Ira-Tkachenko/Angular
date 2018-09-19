import * as express from 'express'

const app = express();

const users: Array<any> = require('../users.json');
const bodyParser: any = require("body-parser");
const fs = require("fs");

app.use(bodyParser());

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res, next) => {
	const userId = req.params["id"];
	res.send(users.find(item => item.id === userId));
});

app.post('/users/add', (req, res, next) => {
  const user = {
  	"id": Math.floor(Math.random() * 10000000000000001).toString(),
	  "name": req.body.name,
		"password": req.body.password,
		"dateOfBirth": req.body.dateOfBirth||"1998-06-18T17:30:00.000Z",
		"dateOfFirstLogin": (new Date).toISOString(),
		"dateOfNextNotification": (new Date).toISOString(),
		"information": req.body.information||"data"
  }
  users.push(user);
  fs.writeFile("../users.json", JSON.stringify(users), (err: any) => {
  	if (err)
  		next(err);
  });
  res.send(user);
});

app.put('/users/:id', (req, res, next) => {
  const userId = req.params["id"];
  let i = users.length;
	while (i--) {
  	if (users[i] && users[i].hasOwnProperty("id") &&
  			(arguments.length > 2 && users[i]["id"] === userId)) { 
   		users[i] = {
   			"id": userId,
			  "name": req.body.name||users[i].name,
				"password": req.body.password||users[i].password,
				"dateOfBirth": req.body.dateOfBirth||users[i].dateOfBirth,
				"dateOfFirstLogin": req.body.dateOfFirstLogin||users[i].dateOfFirstLogin,
				"dateOfNextNotification": req.body.dateOfNextNotification||users[i].dateOfNextNotification,
				"information": req.body.information||users[i].information
   		}
  	}
	}	
	fs.writeFile("../users.json", JSON.stringify(users), (err: any) => {
  	if (err)
  		next(err);
  });
  res.send(users);
});

app.delete('/users/:id', (req, res, next) => {
  const userId = req.params["id"];
  let i = users.length;
	while (i--) {
  	if (users[i] && users[i].hasOwnProperty("id") &&
  			(arguments.length > 2 && users[i]["id"] === userId)) { 
   		users.splice(i, 1);
  	}
	}
	fs.writeFile("../users.json", JSON.stringify(users), (err: any) => {
  	if (err)
  		next(err);
  });
  res.send(users);
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => { 
	if (err.status !== 404) 
		console.error(err); 
	res.sendStatus(err.status || 500); 
});

app.listen(3030, () => {
  console.log('Example app listening on port 3030!');
});