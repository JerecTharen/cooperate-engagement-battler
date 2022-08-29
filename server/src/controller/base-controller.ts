import { Router } from "express";

/**
 * abstract class that defines the required fields for a controller class
 * 
 * all controller classes must extend this one
 */
export default abstract class BaseController{
    router: Router;

    constructor(){
        this.router = Router();
    }

    abstract routes(): Router;
}