import 'reflect-metadata';
import { app } from './app.js';
import { AppDataSource } from './app-datasource.js';

export const port = 3000;

//initialize typeorm datasource
await AppDataSource.initialize().catch((error) => console.log(error));

//start express app
app.listen(port, ()=>{
  console.log('App listener on port: ' + port);
});