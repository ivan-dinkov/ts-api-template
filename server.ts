import express, { Application } from "express";
import EnvVars  from './src/constants/envVars';
import Server from "./src"
import dotenv from 'dotenv';

dotenv.config({  path: './.env' });
const port: number = parseInt(EnvVars.Port.toString(),10);
const app: Application = express();
const server: Server = new Server(app);
const host: string = EnvVars.Host;

app
  .listen(port, host, () => {
    console.log(`Server is running on port ${port}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });