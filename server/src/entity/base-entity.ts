/**
 * class that defines the most basic fields of an entity class.
 * 
 * Entity classes are directly mapped to our databases table schemas and should never be returned directly to the client. Use DTOs to send data from the server to the client to prevent breaking changes when updating database table schemas.
 *
 * All Entity classes must extend this class
 */
export default abstract class BaseEntity<T>{
    id:T
}