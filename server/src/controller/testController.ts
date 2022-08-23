import { Request, Response, Router } from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class TestController{

    router: Router;

    constructor(){
        this.router = Router();
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

    routes(){
        //test routes
        this.router.get('/test', (...[, resp]: [Request, Response]) => resp.send(this.getTest(resp)));
        this.router.post('/test', (req: Request, resp: Response) => resp.send(this.postTest(req,resp)));
        return this.router;
    }
}