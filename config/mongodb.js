import dotenv from "dotenv"
dotenv.config()
import {MongoClient} from "mongodb"
export const dbclient=new MongoClient(process.env.mongo_url);