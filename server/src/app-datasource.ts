import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "user",
    "password": "password",
    "database": "postgres",
    "synchronize": true,
    "entities": [
      "build/src/entity/*.js"
    ]
  });