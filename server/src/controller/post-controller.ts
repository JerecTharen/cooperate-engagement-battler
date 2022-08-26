import { Request, Response } from 'express';
import { autoInjectable, inject } from 'tsyringe';
import Post from '../entity/post.js';
import * as IPostService from '../service/Ipost-service.js';
import { PostDTO } from '../dto/post-dto.js';
import PostService from '../service/post-service.js';
import BaseController from './base-controller.js';

/**
 * class to define the controller for Post entity to be devided later for feature specific controllers
 * 
 * Dependency Injection enabled
 */
@autoInjectable()
export default class PostController extends BaseController{

    postService: IPostService.Service;

    //inject dependencies via constructor
    constructor(@inject(PostService) postService: IPostService.Service){
        super();
        this.postService = postService;
    }

    /**
     * get endpoint for retrieving a post by urn
     * 
     * @param req 
     * @param resp 
     */
    getPostByUrn(req:Request,resp:Response){
        this.postService.getPostByUrn(req.params.urn)
            .then((post) => {
                return resp.status(200).send(convertToDTO(post))
        });
    }

    /**
     * get endpoint for returning a pagnated list of Post
     * 
     * @param req 
     * @param resp 
     * @returns 
     */
    getPageOfPost(req:Request, resp:Response){
        const post: Promise<Post[]> = this.postService.getPageOfPost(parseInt(req.params.take),parseInt(req.params.skip));
        post.then((e) => {
            if(e){
                return resp.status(200).send(convertAllToDTO(e));
            }
            return resp.status(500).send({error: "Somthing went wrong"});
        });
        
    }

    /**
     * post endpoint for adding a new Post
     * 
     * @param req 
     * @param resp 
     * @returns 
     */
    addPost(req:Request,resp:Response){
        return resp.status(200).send(this.postService.addPost(req.body));
    }

    /**
     * function that adds endpoints to the router then returns it
     * 
     * @returns 
     */
    routes() {
        //get route using url variable
        this.router.get('/getPostByUrn/:urn', (req,resp) => this.getPostByUrn(req,resp));

        //get route using url variable
        this.router.get('/getPageOfPost/:take/:skip', (req,resp) => this.getPageOfPost(req,resp));


        //post router using objet to define input type
        this.router.post('/addPost', (req,resp) => this.addPost(req,resp));
        return this.router;
      }
}

/**
 * helper function to convert from Post object to PostDTO objects
 * 
 * @param post 
 * @returns 
 */
function convertToDTO(post:Post): PostDTO{
    return new PostDTO(post.id,post.post_urn,post.user_urn);
}

/**
 * helper function to convert a list of Post to PostDTO objects
 * 
 * @param posts 
 * @returns 
 */
function convertAllToDTO(posts:Post[]): PostDTO[]{
    return posts.map(post => {
        return convertToDTO(post)
    });
}