import { NodeEnvs } from "./misc";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export default {
  NodeEnv: process.env.APP_ENV ?? NodeEnvs.Dev.toString(),
  Port: process.env.PORT ?? NodeEnvs.Port.toString(),
  Host: process.env.HOST ?? NodeEnvs.Host.toString(),
};
