import express from "express";
import cors from "cors";
import morgan from "morgan";
import type { Express } from "express";

const { inTesting, NODE_ENV } = process.env;

const inProduction = NODE_ENV === "production";

const logging = inProduction
  ? ":remote-addr [:date] :referrer :method :url HTTP/:http-version :status :res[content-length]"
  : "tiny";

//= ===========================================================//
/* APP MIDDLEWARE */
//= ===========================================================//
const middlewares = (app: Express): void => {
  app.set("json spaces", 2); // sets JSON spaces for clarity
  if (inProduction) app.set("trust proxy", 1);

  if (!inTesting) app.use(morgan(logging));

  app.use(cors());

  app.use(express.json()); // parses header requests (req.body)
};

export default middlewares;
