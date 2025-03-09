// YOUR_BASE_DIRECTORY/netlify/functions/api.ts
const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

app.use("/app/", router);

module.exports.handler = serverless(app);
