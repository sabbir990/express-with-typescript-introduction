import express , {Request, Response} from "express";
import fs from 'fs';
import path from 'path';

export const infosRouter = express.Router();
const filePath = path.join(__dirname, "../../../DB/DB.json");

infosRouter.get("/",  async(req : Request, res : Response) => {
    res.send("This is my dummy server And I'm starting to love it already and I'm gonna go even further!")
})

infosRouter.get("/all-infos", async(req : Request, res: Response) => {
    const infos = fs.readFileSync(filePath, {encoding : "utf-8"});

    res.json(infos)
})

infosRouter.post("/post-info", async(req : Request, res: Response) => {
    const postedInformation = req.body;

    console.log(postedInformation);

    res.send("This is sent!")
})
