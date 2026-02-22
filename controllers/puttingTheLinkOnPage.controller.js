import path from 'path'
import {readFile} from 'fs/promises'
import { loadlinks } from '../models/savers.model.js';
import { writeFile } from 'fs/promises'; 
export const showuptheLINK=async(req,res)=>{
     const filep=path.join("./views","index.html")
    const file=await readFile(filep,'utf-8')
     const link=await loadlinks();
    const content=file.toString().replaceAll("{{shoten-code}}",
    link
            .filter((obj) => obj.finalShort== req.params.shorten)
            .map((obj) =>
                `<li><a href="/${obj.finalShort}" target="_blank"> ${req.host}/${obj.finalShort}</a> - ${obj.url.slice(0,15)}...</li>`
            ).join("")
    )
    
   return res.send(content)


}