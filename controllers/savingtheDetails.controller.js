
import path from 'path'
import {readFile} from 'fs/promises'
import { loadlinks } from '../models/savers.model.js';
import { save } from '../models/savers.model.js';
import { writeFile } from 'fs/promises';
export const savingthedetail=async(req,res)=>{
    try{
        const {url,shorten}=req.body;
        const finalShort=shorten;
        console.log(finalShort)
        const link=await loadlinks();
        console.log(link)
        link.map((obj)=>{
             if(obj.finalShort==finalShort){
            return res.
            status(400)
            .send("shorten name already takem")
   
        }

        })
       
       // link[finalShort]=url;//changed for mongodb
        //save(link)//changed for mongodb
        save({url,finalShort})
       res.redirect(`/parcel/${finalShort}`)
       // await writeFile('link.json',JSON.stringify(link))
    }

    catch(error){
console.log(error)
    }

}