import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "user",
    "password": "password",
    "synchronize": true,
    "entities": [
      "src/entity/post.js"
    ]
  });