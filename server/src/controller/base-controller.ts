import { Router } from "express";

/**
 * abstract class that defines the requiared fields for a controller class
 * 
 * all controller classes must extend this one
 */
export default abstract class BaseController{
    router: Router;

    constructor(){
        this.router = Router();
    }
}