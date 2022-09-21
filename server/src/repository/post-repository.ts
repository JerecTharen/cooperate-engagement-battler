import { autoInjectable } from "tsyringe";
import { AppDataSource } from '../app-datasource.js';
import Post from "../entity/post.js";
import { IPostRepository } from './Ipost-repository.js';

/**
 * class that implements IPostRepository
 * 
 * Dependency Injection enabled
 */
@autoInjectable()
export default class PostRepository implements IPostRepository{

    async getPostById (input: number): Promise<Post> {
        return await AppDataSource.manager.findOneBy(Post,{
            id: input,
        });
    }

    async getPageOfPost(take: number, skip: number):Promise<Post[]>{
        const data = await AppDataSource.manager.findAndCount(Post,{
            take: take,
            skip: skip
        });
        return data[0];
    };

    async getPostByUrn(input:string): Promise<Post>{
        const res = await AppDataSource.manager.findOneBy(Post,{
            post_urn: input,
        });
        return res;
    }

    save<Post>(input:Post):void{
        AppDataSource.manager.save(input);
    }
}