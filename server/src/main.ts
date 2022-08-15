import express from 'express';
import { Request, Response } from 'express-serve-static-core';
import BodyParser from 'body-parser';
import cors from 'cors';

export const app = express();
export const port = 3000;

app.listen(port, ()=>{
  console.log('App listener on port: ' + port);
});

app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());

app.use(cors());

app.get('/test', (...[, resp]: [Request, Response])=>{
  resp.status(200).send(JSON.stringify({'test': 'sucessful'}));
});

app.post('/test', (req: Request, resp: Response) =>{
  console.log('Server recieved body: ' + JSON.stringify(req.body));
  if(req.body === undefined || req.body === null || JSON.stringify(req.body) === JSON.stringify({}))
    resp.status(500).send(JSON.stringify({'test': 'fail'}));
  else
    resp.status(200).send(JSON.stringify({...req.body, test: 'successful'}));
});
