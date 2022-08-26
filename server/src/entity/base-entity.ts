/**
 *class that defines the most basic fields of an entity class
 *
 * All Entity classes must extend this class
 */
export default abstract class BaseEntity<T>{
    id:T
}