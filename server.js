import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cartRoutes from "./routes/cartRoutes.js"


dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors({
    origin: "*",
  
  }));


  const connection_URL = process.env.MONGO_URL;
  mongoose.connect(connection_URL, { useNewUrlParser: true, useUnifiedTopology: true } ).then(async()=>{
   await app.listen(port, () =>{
        console.log(`Running on port: ${port}`)
    })
}).catch((error) => {console.log("error message:" + error.message); process.exit(1)});

app.get("/api", (req,res) =>{
    console.log(req)
    res.json({message: 'Hey there! welcome to API service'})
} );

app.use("/", cartRoutes)
