import express from "express";
import dotenv from "dotenv/config";
import mysql from "mysql2/promise";

const app = express();

const PORT = process.env.PORT;

const poolConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    waitforConnections: true,
    connetionLimit: 24,
    queueLimit: 0,
};

const pool = mysql.createPool(poolConfig);

app.use(express.json());

app.get;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
