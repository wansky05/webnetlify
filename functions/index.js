// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";

const app = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

app.use("/api/", router);

module.exports.handler = serverless(app);
