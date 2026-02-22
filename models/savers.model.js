// import path from 'path'
// import {readFile} from 'fs/promises'
// import { writeFile } from 'fs/promises';
// export const loadlinks=async()=>{
//     try{
//     const data=await readFile('./links.json','utf-8')
//     return JSON.parse(data);
//     }
//     catch(err){
//         if(err.code=='ENOENT'){
//             await writeFile('./links.json',JSON.stringify({}))
//             return {};
//         }
//         throw err;
//     }
// }
// export const save=async(links)=>{
//     try{
//     await writeFile("./links.json",JSON.stringify(links))//we didn't used only links only, bcz links is a object but we need to add a json in that file, links is a object bcz whnever it gets a values, it is getting after Json.parse()
//     }
//     catch(e){
// console.log(e);
//     }
// }


import { dbclient } from "../config/mongodb.js";
import dotenv from "dotenv"
dotenv.config()

const databs=dbclient.db(process.env.mongodb_name)
const collect=databs.collection("shorterner")
export const loadlinks=async()=>{
    const content=collect.find().toArray();//here.find() returns an cursor which points to the objects present in the database
    return content;

}
export const save=async(link)=>{
    return await collect.insertOne(link)
}
export const getlinkByShortcode=async(shorten)=>{
    return await collect.findOne({finalShort:shorten})
}