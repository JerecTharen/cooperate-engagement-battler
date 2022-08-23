import express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';
import { container } from 'tsyringe';
import PostController from './controller/post-controller.js';
import TestController from './controller/testController.js';

export const app = express();
  
  app.use(BodyParser.urlencoded({extended: true}));
  app.use(BodyParser.json());
  
  app.use(cors());
  //add Controller to app using DI
  app.use('/post', container.resolve(PostController).routes());
  app.use('/test', container.resolve(TestController).routes());