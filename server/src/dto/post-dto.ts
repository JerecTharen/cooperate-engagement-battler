/**
 * Data Transfer Object for Post Entites
 */
export class PostDTO{
    id:number;
    postUrn: string;
    userUrn: string;

    constructor(id:number,postUrn:string,userUrn:string){
        this.id = id;
        this.postUrn = postUrn;
        this.userUrn = userUrn;
    }
}