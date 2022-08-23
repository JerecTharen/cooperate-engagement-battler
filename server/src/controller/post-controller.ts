import { Request, Response, Router } from 'express';
import { autoInjectable, inject } from 'tsyringe';
import Post from '../entity/post.js';
import * as IPostService from '../service/Ipost-service.js';
import { PostDTO } from '../dto/post-dto.js';
import PostService from '../service/post-service.js';

//tsyringe decoreator allows class to be injected with DI
@autoInjectable()
/**
 * class to define the controller for Post entity to be devided later for feature specific controllers
 */
export default class PostController{

    postService: IPostService.Service;
    router: Router;

    //inject dependencies via constructor
    constructor(@inject(PostService) postService: IPostService.Service){
        this.postService = postService;
        this.router = Router();
    }

    //endpoint for retrieving a post by urn
    getPostByUrn(req:Request,resp:Response){
        this.postService.getPostByUrn(req.params.urn)
            .then((post) => {
                return resp.status(200).send(convertToDTO(post))
        });
    }

    getPost(req:Request, resp:Response){
        const post: Promise<Post[]> = this.postService.getPost(req.body.take,req.body.skip);
        post.then((e) => {
            return resp.status(200).send(convertAllToDTO(e));
        });
        return resp.status(500).send({error: "Somthing went wrong"})
    }

    addPost(req:Request,resp:Response){
        console.log("hit" + req.body);
        return resp.status(200).send(this.postService.addPost(req.body));
    }

    routes() {
        //get rout using url variable
        this.router.get('/getPostByUrn/:urn', (req,resp) => this.getPostByUrn(req,resp));
        //post router using objet to define input type
        this.router.get('/addPost', (req,resp) => this.addPost(req,resp));
        return this.router;
      }
}

function convertToDTO(post:Post): PostDTO{
    return new PostDTO(post.id,post.post_urn,post.user_urn);
}

function convertAllToDTO(posts:Post[]): PostDTO[]{
    return posts.map(post => {
        return convertToDTO(post)
    });
}