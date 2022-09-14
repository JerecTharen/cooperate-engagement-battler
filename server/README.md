# node-typescript-boilerplate

Boilerplate README
[a link](https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/README.md)

# Setting up a Docker Compose Enviorment for local devlopement

This project is intended to be deployed with a PostgreSQL database along with the possability for more services in the future. As such we have created a local devlopment enviorement with docker compose currently containing an instance of pgadmin(a web based GUI tool to interact with postgresql databases) and a postgresql database.

- What is docker [a link]()
- What is docker compose [a link](https://docs.docker.com/compose/)
- Install docker [a link](https://docs.docker.com/engine/install/)
- Install docker compose [a link](https://docs.docker.com/compose/install/)
- Getting started with docker compose [a link](https://docs.docker.com/compose/gettingstarted/)

# Backend Files and Folders Explained

### Main.ts:

The main.ts file is our runner file(file that actually runs the express application) that makes it possible to run our application and inject dependencies that are required throughout the application.

### App.ts:

This file serves as the root for our backend express application. This is where we create the express object and configure different applications such as CORS, BodyParser and add our controller classes.

### App-datasource.ts:

This is where we define the datasource connection setting for TypeORM that is preconfigured to work with our postgresql database defined in our docker-compose.yml file out of the box.

### controller:

This folder contains the files for our controller classes. The controller classes contain the methods that our rest APIs endpoints call. Each Controller class extends the BaseController class and has the method route() that returns the router so that we can apply it to our express object in app.ts at start up.

### entity:

The entity folder contains the TypeORM Entity classes that define the structure of our data when it is persisted. All Entities extend BaseEntity and contain a unique identifier id of a generic type.

### Service:

The Service folder contains the service layers of our application. This is where all the business logic of our application lives and serves as a layer of protection for our core domain. Service classes are never called directly by the controller layer instead controllers call on the interface that each service class implements. We use dependency injection to inject the implementing classes at runtime..

### Repository:

The repository folder contains the repository classes which are used to persist our entity objects. Every Repository class extends IBaseRepository and contains the logic for persisting our application data as defined by our entity objects.

# Important Concepts and Things to Know:

### DTO:

DTOs are serializable objects that define the shape of our data being sent to consuming clients. Acts as a contract between the server and consuming clients.

Video Explanation: Why use DTOs (Data Transfer Objects)?

### ORM:

Frameworks use to map object types to database schemas

### Entity:

### Data Access Layer:

### Service Layer:

### Controller Layer:
