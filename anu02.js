import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/url.routes.js'
dotenv.config()

const app=express();
app.use(express.static('pub'));
app.use(express.urlencoded())

app.use("/anurag",routes)
const port=process.env.pro;

app.listen(port,()=>{
    console.log("running")
})