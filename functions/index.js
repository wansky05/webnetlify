const express = require("express");
const serverless = require("serverless-http");
const path = require('path');
const ytmp3 = require("./savetube.js");
const aichat = require('./aitoxic.js');
const tikwm = require('./tikwm.js');
const ig = require('./ig.js');
const yta = require('./yta.js');
const ytv = require('./ytv.js');
const fb = require('./fb.js');
const {getBuffer} = require('./myfunc.js');
const downloaderyt = require('./downloaderyt.js');
const downloadFileAsBuffer = require('./downloadFileAsBuffer.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const router = express.Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

router.get('/', (req, res) => {
    res.sendFile(path.join('home.html'));
});

router.get('/ytget/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await downloaderyt(q)
const parsedUrl = new URL(q);
const basehost = parsedUrl.hostname
let name = q.replace(basehost,'').replace('https://','').replace("/downloads/download.php?file=/",'')
console.log(name)
// Menambahkan header untuk mendownload file dengan nama yang benar
res.setHeader('Content-Disposition', `attachment; filename="${decodeURIComponent(name)}"`);
// Mengatur tipe konten file sebagai MP3
res.setHeader('Content-Type', 'audio/mpeg'); // Tipe MIME untuk file MP3
res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

router.get('/download/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await downloadFileAsBuffer(q)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

router.get('/getbuffer/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await getBuffer(q)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

router.get('/ai/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await aichat(q)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

router.get('/ytmp3/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await ytmp3(q,"128","audio")
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

router.get('/tiktok/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await tikwm(q)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

router.get('/ig/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await ig(q,baseUrl)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

router.get('/fb/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await fb(q,baseUrl)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

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

router.get('/ytv/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await ytv(q,baseUrl)
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
