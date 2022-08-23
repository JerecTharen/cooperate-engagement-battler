import { autoInjectable, inject, registry } from "tsyringe";
import Post from '../entity/post.js';
import { IPostRepository } from "../repository/Ipost-repository.js";
import * as IPostService from './Ipost-service.js';
import PostRepository from '../repository/post-repository.js';


/**
 * implementation of IpostService.Service interface
 */
 @autoInjectable()
 @registry([{
     token: "IPostService",
     useToken: PostService
 }])
export default class PostService implements IPostService.Service{

    postRepository: IPostRepository;

    constructor(@inject(PostRepository) postRepository: IPostRepository){
        this.postRepository = postRepository;
    }

    getPost(take:number,skip:number): Promise<Post[]>{
        return this.postRepository.getPost(take,skip)
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