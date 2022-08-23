import Post from "../entity/post.js";

    export class addPostInput{
        postUrn: string;
        userUrn: string;
    }

    export interface Service{
        //returns a post matching the provided urn
        getPostByUrn(input:string): Promise<Post>;
        //returns a pagnated list of post
        getPost(take: number, skip:number): Promise<Post[]>
        //add a post to the DB
        addPost(input:addPostInput): void;
    }