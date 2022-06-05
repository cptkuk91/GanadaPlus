import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME || "typescript_test",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  },
};
