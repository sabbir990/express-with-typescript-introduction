import express, { Application, Request, Response } from "express";
import fs from 'fs';
import path from 'path';

const app : Application = express();
const filePath = path.join(__dirname, "../../DB/DB.json")

app.use(express.json());

app.get('/', async(req : Request, res : Response) => {
    res.send("This is my dummy server And I'm starting to love it already and I'm gonna go even further!")
})

app.get("/infos/:information", async(req : Request, res: Response) => {
    const infos = fs.readFileSync(filePath, {encoding : "utf-8"});

    res.json(infos)
})

app.post("/post-info", async(req : Request, res: Response) => {
    const postedInformation = req.body;

    console.log(postedInformation);

    res.send("This is sent!")
})

export default app;