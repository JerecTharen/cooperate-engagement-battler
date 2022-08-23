import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export default class Post{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    user_urn:string;

    @Column()
    post_urn:string;

    constructor(post_urn:string, user_urn:string){
        this.post_urn = post_urn;
        this.user_urn = user_urn;
    }
}