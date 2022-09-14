/**
 * Data Transfer Object for Post Entites
 * 
 * Used to define the shape of data between the client expects to recieve from the server forming a type of contract. Sepearete from Entity classes to prevent breaking changes in the client when changes are made to the Entity class.
 * 
 * Generated at the controller layer using data returned by the service layer.
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