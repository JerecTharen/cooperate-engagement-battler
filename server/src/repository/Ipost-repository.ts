import Post from "../entity/post.js";
import { IBaseRepository } from "./Ibase-repository.js";

export interface IPostRepository extends IBaseRepository{

    /**
     * return Post matcning the provided id
     * 
     * @param input 
     */
    getPostById(input:number): Promise<Post>;
    
    /**
     * returns Post matching provided urn
     * 
     * @param input 
     */
    getPostByUrn(input:string): Promise<Post>;

    /**
     * returns pagnatd array of Post objects
     * 
     * @param take 
     * @param skip 
     */
    getPageOfPost(take: number, skip: number): Promise<Post[]>;
}