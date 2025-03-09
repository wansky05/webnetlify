// YOUR_BASE_DIRECTORY/netlify/functions/api.ts
const express = require("express");
const serverless = require("serverless-http");
const yta = require('./yta.js')
const app = express();
const router = express.Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

router.get('/yta/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await yta(q,baseUrl)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.use("/.netlify/functions/index", router);

module.exports.handler = serverless(app);
