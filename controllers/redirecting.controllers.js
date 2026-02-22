import path from 'path'
import {readFile} from 'fs/promises'
import { loadlinks,getlinkByShortcode } from '../models/savers.model.js';
import { writeFile } from 'fs/promises';
export const redirect=async(req,res)=>{
    console.log(req.params)
    const {shorten}=req.params;
    console.log(shorten)
    //const link=await loadlinks(); //change for momgp
    const link=await getlinkByShortcode(shorten)
    // console.log(link)
    // if(!link[shorten]){
    //     return res.send("not found");//for mongo
    // }
    if(!link)
         return res.send("not found")
        else
    return res.redirect(link.url);

}