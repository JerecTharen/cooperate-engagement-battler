import Post from "../entity/post.js";

export interface IPostRepository{
    //return Post matcning the provided id
    getPostById(input:number): Promise<Post>;
    //returns Post matching provided urn
    getPostByUrn(input:string): Promise<Post>;
    //returns pagnatd array of Post objects
    getPost(take: number, skip: number): Promise<Post[]>;
    //save a Post object to the datasource
    save(input:Post): void;
}