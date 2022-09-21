import { autoInjectable, inject } from "tsyringe";
import Post from '../entity/post.js';
import { IPostRepository } from "../repository/Ipost-repository.js";
import * as IPostService from './Ipost-service.js';
import PostRepository from '../repository/post-repository.js';
import "reflect-metadata";


/**
 * class that implements IPostService.Service
 * 
 * Dependency Injection enabled
 */
 @autoInjectable()
export default class PostService implements IPostService.Service{

    //declare IPostRepository dependency to be injected
    postRepository: IPostRepository;

    //inject the class implementing the IPostRepository interface in the
    constructor(@inject(PostRepository) postRepository: IPostRepository){
            this.postRepository = postRepository;
        }

    getPageOfPost(take:number,skip:number): Promise<Post[]>{
        return this.postRepository.getPageOfPost(take,skip)
    }

    getPostByUrn(post_urn:string): Promise<Post>{
        return this.postRepository.getPostByUrn(post_urn);
    }

    addPost(input:IPostService.addPostInput):void{
        this.postRepository.save(
            new Post(
                input.postUrn,
                input.userUrn
                )
        );
    }
}