import { Request, Response } from "express";
import { autoInjectable } from "tsyringe";
import BaseController from "./base-controller.js";

/**
 * controller class that contains endpoints from origional boilerplate use for training/teating
 * 
 * extends BaseController
 * Dependency Injection enabled
 */
@autoInjectable()
export default class TestController extends BaseController{

    constructor(){
        super();
    }

    routes(){
        //test routes
        this.router.get('/test', (...[, resp]: [Request, Response]) => resp.send(this.getTest(resp)));
        this.router.post('/test', (req: Request, resp: Response) => resp.send(this.postTest(req,resp)));
        return this.router;
    }

    getTest(resp:Response){
        return resp.status(200).send(JSON.stringify({'test': 'sucessful'}));
    }

    postTest(req:Request,resp:Response){
        console.log('Server recieved body: ' + JSON.stringify(req.body));
        if(req.body === undefined || req.body === null || JSON.stringify(req.body) === JSON.stringify({})){
            resp.status(500).send(JSON.stringify({'test': 'fail'}));
        }  
        else{
            resp.status(200).send(JSON.stringify({...req.body, test: 'successful'}));
        }
    }
}