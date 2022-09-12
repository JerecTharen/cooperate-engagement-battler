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
     * function that adds endpoints to the router then returns it
     * 
     * @returns 
     */
     routes() {
        //get route using url variable
        this.router.get('/getPostByUrn', (req,resp) => this.getPostByUrn(req,resp));

        //get route using url variable
        this.router.get('/getPageOfPost', (req,resp) => this.getPageOfPost(req,resp));


        //post router using objet to define input type
        this.router.post('/addPost', (req,resp) => this.addPost(req,resp));
        return this.router;
      }

    /**
     * get endpoint for retrieving a post by urn
     * 
     * Path: /post/getPostByUrn
     * 
     * Query Params:
     *  urn: string
     * 
     * @param req 
     * @param resp 
     */
    getPostByUrn(req:Request,resp:Response){
        this.postService.getPostByUrn(req.query.urn as string)
            .then((post) => {
                return resp.status(200).send(convertToDTO(post))
        });
    }

    /**
     * get endpoint for returning a paginated list of Post
     * 
     * Path: /post/getPageOfPost
     * 
     * Query Params:
     *  take: number,
     *  skip: number
     * 
     * @param req 
     * @param resp 
     * @returns 
     */
    getPageOfPost(req:Request, resp:Response){
        const post: Promise<Post[]> = this.postService.getPageOfPost(parseInt(req.query.take as string),parseInt(req.query.skip as string));
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
     * Path: /post/addPost
     * 
     * @param req 
     * @param resp 
     * @returns 
     */
    addPost(req:Request,resp:Response){
        return resp.status(200).send(this.postService.addPost(req.body));
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