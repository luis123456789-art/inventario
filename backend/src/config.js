//leer las bases de entorno de la db
import {config} from "dotenv"

config();

export default{
    host : process.env.HOST,
    database : process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT
}