import path from 'path'
import {readFile} from 'fs/promises'
import { loadlinks } from '../models/savers.model.js';
import { writeFile } from 'fs/promises';
import express from 'express'

export const gettinData=async(req,res)=>{
    try{
        const filep=path.join("./views","index.html")
    const file=await readFile(filep)
    const link=await loadlinks();
    const content=file.toString().replaceAll("{{shoten-code}}"," "
      
    )         
    
   return res.send(content)
    }
    catch(error){
        console.log(error)
res.end("not present")
    }
    
}