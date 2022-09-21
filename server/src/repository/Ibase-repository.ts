import BaseEntity from '../entity/base-entity.js';

/**
 * interface the defines the methods that all Repository class must implement
 * 
 * all repository classes implement this class
 */
export interface IBaseRepository{
    //saves and object that extends BaseEntity using gerneric types
    save<S,T extends BaseEntity<S>>(input:T): void;
}