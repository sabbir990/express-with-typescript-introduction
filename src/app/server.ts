import app from "./app";
import {MongoClient, ServerApiVersion} from 'mongodb';

const uri = "mongodb+srv://NEW_user:sFXxmoMtYyr0kj3Z@cluster0.p2btb5w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let server;
const PORT = 5000;
let db;

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

const bootstrap = async() => {
    await client.connect();

    db = await client.db("Infos")

    console.log("Client is connected!");

    server = app.listen(PORT, () => {
        console.log(`This app is running in PORT ${PORT}`)
    })
}

bootstrap();