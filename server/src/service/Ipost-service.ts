import Post from "../entity/post.js";

    /**
     * POJO that defines the input object for addPost
     * 
     */
    export class addPostInput{
        postUrn: string;
        userUrn: string;
    }

    /**
     * Interface that defines the methods 
     * 
     */
    export interface Service{
        /**
         * returns a post matching the provided urn
         * 
         * @param input 
         */
        getPostByUrn(input:string): Promise<Post>;

        /**
         * returns a pagnated list of post
         * 
         * @param take
         * @param skip
         **/
        getPageOfPost(take: number, skip:number): Promise<Post[]>

        /**
         * add a post to the Data Source
         * 
         * @param input 
         */
        addPost(input:addPostInput): void;
    }