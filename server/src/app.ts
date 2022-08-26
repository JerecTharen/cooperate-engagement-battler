import express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';
import { container } from 'tsyringe';
import PostController from './controller/post-controller.js';
import TestController from './controller/test-controller.js';

//expor the Express object
export const app = express();
  
  //configure BodyParser for REST request
  app.use(BodyParser.urlencoded({extended: true}));
  app.use(BodyParser.json());
  
  //enable CORS
  app.use(cors());

  //add Controller classes to app using Dependency Injection
  app.use('/post', container.resolve(PostController).routes());
  app.use('/test', container.resolve(TestController).routes());