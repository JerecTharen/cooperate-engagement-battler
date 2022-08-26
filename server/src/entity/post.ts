import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import BaseEntity from './base-entity.js';

/**
 * Entity class that defines the Post entity
 * 
 * uses Post table in the data source
 * extends BaseEntity
 */
@Entity({name: "Post"})
export default class Post extends BaseEntity<number>{
    //overrides the super class id propertity
    @PrimaryGeneratedColumn()
    declare id:number;

    @Column()
    user_urn:string;

    @Column()
    post_urn:string;

    constructor(post_urn:string, user_urn:string){
        super();
        this.post_urn = post_urn;
        this.user_urn = user_urn;
    }
}