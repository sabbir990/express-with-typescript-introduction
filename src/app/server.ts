import app from "./app";

let server;
const PORT = 5000;

const bootstrap = async() => {
    server = app.listen(PORT, () => {
        console.log(`This app is running in PORT ${PORT}`)
    })
}

bootstrap();