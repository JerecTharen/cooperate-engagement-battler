import { autoInjectable, registry } from "tsyringe";
import { AppDataSource } from '../app-datasource.js';
import Post from "../entity/post.js";
import { IPostRepository } from './Ipost-repository.js';

@autoInjectable()
@registry([{
    token: "IPostRepository",
    useToken: PostRepository
}])
export default class PostRepository implements IPostRepository{

    getPostById (input: number): Promise<Post> {
        return AppDataSource.manager.findOneBy(Post,{
            id: input,
        });
    }

    getPost(take: number, skip: number):Promise<Post[]>{
        const data = AppDataSource.manager.findAndCount(Post,{
            take: take,
            skip: skip
        });
        return data[0];
    };

    async getPostByUrn(input:string): Promise<Post>{
        const res = AppDataSource.manager.findOneBy(Post,{
            post_urn: input,
        });
        return res;
    }

    async save(input:Post): Promise<void>{
        await AppDataSource.manager.save(input);
    }
}