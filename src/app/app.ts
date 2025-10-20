import express, { Application } from "express";
import { infosRouter } from "./infos/infos.routes";

const app : Application = express();


app.use(express.json());

app.use("/infos", infosRouter);

export default app;