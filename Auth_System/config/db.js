import mysql from "mysql2/promise.js";

const pool = mysql.createPool({
    host: process.env.HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.USER,
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DATABASE,
});

export default pool;
