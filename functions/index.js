const express = require("express");
const serverless = require("serverless-http");
const fs = require('fs');
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

router.get("/", (req, res) => {
let html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Documentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }

        header {
            background-color: #1e90ff;
            color: white;
            padding: 20px;
            text-align: center;
        }

        h1 {
            margin: 0;
        }

        h2 {
            color: #1e90ff;
            margin-bottom: 5px;
        }

        h3 {
            margin-top: 10px;
            color: #333;
        }

        section {
            margin: 20px;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        pre {
            background-color: #f5f5f5;
            border-radius: 5px;
            padding: 15px;
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-x: auto;
            max-width: 100%;
            box-sizing: border-box;
        }

        a {
            color: #1E90FF;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        footer {
            background-color: #1e90ff;
            color: white;
            text-align: center;
            position: fixed;
            height: 5%;
            padding-bottom: 15px;
            width: 100%;
            bottom: 0;
        }

        .api-endpoint {
            margin-bottom: 20px;
        }

        .api-endpoint p {
            margin: 0;
        }

        .api-endpoint pre {
            white-space: pre-wrap; /* Ensure the text wraps properly */
            word-wrap: break-word;
        }
    </style>
</head>
<body>

    <header>
        <h1>API Documentation</h1>
        <p>Welcome to the API documentation! Below you will find all the available API endpoints.</p>
    </header>

    <section class="api-endpoint">
        <h2>GET AI</h2>
        <p><strong>URL:</strong> <a href="https://oneapiserver.vercel.app/ai/id?data=apa+itu+klorofil" target="_blank">https://oneapiserver.vercel.app/ai/id?data=apa+itu+klorofil</a></p>
        <h3>Response</h3>
        <pre>
{
  "status": true,
  "author": "iwan",
  "result": {
    "respon": "Klorofil itu zat hijau yang ada di tanaman, bro! Fungsinya buat fotosintesis, biar tanaman bisa bikin makanan sendiri. Gampang banget kan? Jangan bilang kamu baru tahu ini!"
  }
}
        </pre>
    </section>

    <section class="api-endpoint">
        <h2>GET YOUTUBE MP3</h2>
        <p><strong>URL:</strong> <a href="https://oneapiserver.vercel.app/yta/id?data=https://www.youtube.com/watch?v=0AJ1hOIyG4k" target="_blank">https://oneapiserver.vercel.app/yta/id?data=https://www.youtube.com/watch?v=0AJ1hOIyG4k</a></p>
        <h3>Response</h3>
        <pre>
{
  "status": true,
  "author": "iwan",
  "result": {
    "title": "SALLSA BINTAN Ft. LEONA ZHEN - GARAM DAN MADU | Feat. RASTAMANIEZ (Official Live Version)",
    "link": "http://oneapiserver.vercel.app/ytget/id?data=https%3A%2F%2Fapiv13dlp.cnvmp3.me%2Fdownloads%2Fdownload.php%3Ffile%3D%2FSALLSA%20BINTAN%20Ft.%20LEONA%20ZHEN%20-%20GARAM%20DAN%20MADU%20_%20Feat.%20RASTAMANIEZ%20(Official%20Live%20Version)%204.mp3"
  }
}
        </pre>
    </section>

    <section class="api-endpoint">
        <h2>GET YOUTUBE MP4</h2>
        <p><strong>URL:</strong> <a href="https://oneapiserver.vercel.app/ytv/id?data=https://www.youtube.com/watch?v=cRKYbhZXoUI" target="_blank">https://oneapiserver.vercel.app/ytv/id?data=https://www.youtube.com/watch?v=cRKYbhZXoUI</a></p>
        <h3>Response</h3>
        <pre>
{
  "status": true,
  "author": "iwan",
  "result": {
    "title": "LEONA ZHEN - BAGAIKAN LANGIT DAN BUMI | Feat. RASTAMANIEZ ( Official Live Version )",
    "link": "http://oneapiserver.vercel.app/ytget/id?data=https%3A%2F%2Fapiv5dlp.cnvmp3.cc%2Fdownloads%2Fdownload.php%3Ffile%3D%2FLEONA%20ZHEN%20-%20BAGAIKAN%20LANGIT%20DAN%20BUMI%20_%20Feat.%20RASTAMANIEZ%20(%20Official%20Live%20Version%20)%20360.mp4"
  }
}
        </pre>
    </section>

    <section class="api-endpoint">
        <h2>GET TIKTOK</h2>
        <p><strong>URL:</strong> <a href="https://oneapiserver.vercel.app/tiktok/id?data=https://vt.tiktok.com/ZSMCtdvKm" target="_blank">https://oneapiserver.vercel.app/tiktok/id?data=https://vt.tiktok.com/ZSMCtdvKm</a></p>
        <h3>Response</h3>
        <pre>
{
  "status": true,
  "author": "iwan",
  "result": {
    "title": "#hanasqevent #mikka #アニメ #映画ドラえもんのび太の地球交響楽 #doraemonmovie #nobitanochikyuusymphony #hanasq #shiosquad #kizukisq ",
    "linkUnblock": "https://tikwm.com/video/media/play/7409709964547067154.mp4",
    "link": "https://tikwm.com/video/media/hdplay/7409709964547067154.mp4",
    "musik": "https://tikwm.com/video/music/7409709964547067154.mp3"
  }
}
        </pre>
    </section>

    <section class="api-endpoint">
        <h2>GET INSTAGRAM</h2>
        <p><strong>URL:</strong> <a href="https://oneapiserver.vercel.app/ig/id?data=https://www.instagram.com/reel/DDd7QqeRyWX/?igsh=MWdpbWl5djhxMTFkMg==" target="_blank">https://oneapiserver.vercel.app/ig/id?data=https://www.instagram.com/reel/DDd7QqeRyWX/?igsh=MWdpbWl5djhxMTFkMg==</a></p>
        <h3>Response</h3>
        <pre>
{
  "status": true,
  "author": "iwan",
  "result": {
    "thumb": "https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LWdpZzQtMi5jZG5pbnN0YWdyYW0uY29tL3YvdTUxLjI4ODUtMTUvNDY5OTc5MTA4XzE4MzgzMjY2NTM3MTA0MjQyXzg0NDYwMjgwOTYzMzUyNDM1MTBfbi5qcGc_c3RwPWRzdC1qcGdfZTE1X2ZyX3AxMDgweDEwODBfdHQ2Jl9uY19odD1zY29udGVudC1naWc0LTIuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwMiZfbmNfb2M9UTZjWjJBRWZIc1JlN1lTeFl2Q2lGSGxWT01HQ21VZHlYYWpEd29aQjJCaGVHOG43Z0FBY015SUxlQnhDWEhOT01YSzNLSGsmX25jX29oYz1sbGd0RFk1YmpnZ1E3a052Z0ZfTnRVMiZfbmNfZ2lkPWFmODQzYjlmN2NkZjRmYzhiMmM2ODZhODE1ZTNkYzM1JmVkbT1BUHMxN0NVQkFBQUEmY2NiPTctNSZvaD0wMF9BWUE3ZnFsaGd4T1pPdjFNdlBfRUROaC1pTFBQalJjSC1QTFF5Q2NzVlBuV05RJm9lPTY3Q0Y4QUIyJl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwaW5zdGEuYXBwX3RodW1iXzQ2OTk3OTEwOF8xODM4MzI2NjUzNzEwNDI0Ml84NDQ2MDI4MDk2MzM1MjQzNTEwX24uanBnIn0.V1VFCKtv1Hx4mylh-4EniyB1E_7iVEqCg0dRxt-MpyQ",
    "link": "https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LWdpZzQtMS5jZG5pbnN0YWdyYW0uY29tL28xL3YvdDE2L2YyL204Ni9BUU9mOVdacGJnY0E0b1dWa0JKRHE0ZlZvU21ydXdaelhmTmFQQUdOR2Y5d0VhMk5XVXJJc9OglKvCHY0eJw%2Ff%2Fw8Y%2Fvfxe%3Fmd5%3D51ca3c1c049d1fb3223c52008d3f6a71%26src%3Dvideo"
  }
}
        </pre>
    </section>

    <section class="api-endpoint">
        <h2>GET FACEBOOK</h2>
        <p><strong>URL:</strong> <a href="https://oneapiserver.vercel.app/fb/id?data=https://fb.watch/yasCLNd0ai" target="_blank">https://oneapiserver.vercel.app/fb/id?data=https://fb.watch/yasCLNd0ai</a></p>
        <h3>Response</h3>
        <pre>
{
  "status": true,
  "author": "iwan",
  "result": {
    "thumb": "https://ssscdn.io/getmyfb/p/aHR0cHM6Ly9zY29udGVudC1taWEzLTEueHguZmJjZG4ubmV0L3YvdDE1LjUyNTYtMTAvNDgxMTMzNzc5XzUwMDM3NjU1Mjg1MDc1M18zNTk4Njk0ODc2Njg5NzI5NjY2X24uanBnP3N0cD1kc3QtanBnX3A1MjZ4Mjk2X3R0NiZfbmNfY2F0PTEwMCZjY2I9MS03Jl9uY19zaWQ9NDBkMzg1Jl9uY19vaGM9Ri15bzJqZFJidGtRN2tOdmdFRnduMTgmX25jX29jPUFkakoydlBoTXpkbXBSZFFFUkJjN0h0NVJFcWI3Q3dWdHRyZjFsQVdody1GWGVpNHFkOEJMWHlYVlR5ekRKdnFhRlUmX25jX3p0PTIzJl9uY19odD1zY29udGVudC1taWEzLTEueHgmZWRtPUFHbzJMLUlFQUFBQSZfbmNfZ2lkPUEyOVNBRklqTnZhQnczYTVrSzNGWGdJJm9oPTAwX0FZR094SFRwZW15VVQxeWJYU2JubFFNbDV2X1NieVRnNjlXLWdHWjVpeFowQmcmb2U9NjdEMDk3MEI=",
    "link": {
      "hd": "https://ssscdn.io/getmyfb/aHR0cHM6Ly92aWRlby1taWEzLTIueHguZmJjZG4ubmV0L28xL3YvdDIvZjIvbTY5L0FRTUZBLVY4ZzV4N1Q0N1F1QXE1SDE2NTVMaDNlNEdJMHhlR2tCbnZiQkI1TW1PS0NRVVlaYmpURHFkWHNfRjIyVjJKbHN6QTlPLUN4X3dfNkZTWk5YancubXA0P2VmZz1leUprZFhKaGRHbHZibDl6SWpveU1UTXNJblpwWDNWelpXTmhjMlZmYVdRaU9qRXdNVEl5TENKNGNIWmZZWE56WlhSZmFXUWlPakV4TlRVNE9UZzVNekk0TlRJME9Ua3NJblpsYm1OdlpHVmZkR0ZuSWpvaWVIQjJYM0J5YjJkeVpYTnphWFpsTGtaQlEwVkNUMDlMTGk1RE15NDNNakF1WkdGemFGOW9NalkwTFdKaGMybGpMV2RsYmpKZk56SXdjQ0o5Jl9uY19odD12aWRlby1taWEzLTIueHguZmJjZG4ubmV0Jl9uY19jYXQ9MTExJl9uY19vYz1BZGlFeEQ5aThXLWJpNzhhQXktalF0cUFmTnBoSjZJaFYwbDI0MjhoTnZDR3V0REVDd256eTFmQThnR0FZM2JWWnFZJnN0cmV4dD0xJnZzPTU4ZjgzNDljOTk2Y2EzNTgmX25jX3ZzPUhCa3NGUUlZT25CaGMzTjBhSEp2ZFdkb1gyVjJaWEp6ZEc5eVpTOUhTamwxY1VKNVJsSk9hekZVVkdOSlFVUkNka3M0VTFGaWVXc3RZbTFrYWtGQlFVWVZBQUxJQVFBVkFoZzZjR0Z6YzNSb2NtOTFaMmhmWlhabGNuTjBiM0psTDBkR1ZHZDBVbnBYY1ZSZlZHWkVjMFZCU2pNdFoyWXlTalZSZUhWaWNrWnhRVUZCUmhVQ0FzZ0JBQ2dBR0FBYkFvZ0hkWE5sWDI5cGJBRXhFbkJ5YjJkeVpYTnphWFpsWDNKbFkybHdaUUV4RlFBQUpxYmN6NVNXMG8wRUZRSW9Ba016TEJkQWFxdTJSYUhLd1JnWlpHRnphRjlvTWpZMExXSmhjMmxqTFdkbGJqSmZOekl3Y0JFQWRRSUEmY2NiPTktNCZvaD0wMF9BWUgwTWtZVnVHUHB2VGRKTjFYWDFPdDZGcnZSZUlrOWN6ajQxc2Z0bGtpNHp3Jm9lPTY3Q0NCMkZCJl9uY19zaWQ9MWQ1NzZk",
      "sd": "https://ssscdn.io/getmyfb/aHR0cHM6Ly92aWRlby1taWEzLTMueHguZmJjZG4ubmV0L28xL3YvdDIvZjIvbTY5L0FRUEF2MGFrdmU1OV9mUTJRVk5mWnBTZXNPYnVuY3hJVVFXbHg1WktNMHNELUptelZvZ1ZqWnRUUFJRYjZRalNNbXBfdmJmSWttUEJOM2RodjhfVFowUXcubXA0P3N0cmV4dD0xJl9uY19jYXQ9MTA4Jl9uY19zaWQ9OGJmOGZlJl9uY19odD12aWRlby1taWEzLTMueHguZmJjZG4ubmV0Jl9uY19vaGM9SVZCbHJMVjBGMDBRN2tOdmdFcG8zSWMmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SW5od2RsOXdjbTluY21WemMybDJaUzVHUVVORlFrOVBTeTR1UXpNdU16WXdMbk4yWlY5elpDSXNJbmh3ZGw5aGMzTmxkRjlwWkNJNk1URTFOVGc1T0Rrek1qZzFNalE1T1N3aWRtbGZkWE5sWTJGelpWOXBaQ0k2TVRBeE1qSXNJbVIxY21GMGFXOXVYM01pT2pJeE15d2lkWEpzWjJWdVgzTnZkWEpqWlNJNkluZDNkeUo5JmNjYj0xNy0xJl9uY196dD0yOCZvaD0wMF9BWUdMcjB0QUl2NlFlb2IxUm5RVlY3Z0c0TWlUd3A4VkVSVG5wWDNnRjg1RTVnJm9lPTY3RDA5NjE2"
    },
    "linkUnblock": {
      "hd": "http://oneapiserver.vercel.app/download/id?data=https%3A%2F%2Fssscdn.io%2Fgetmyfb%2FaHR0cHM6Ly92aWRlby1taWEzLTIueHguZmJjZG4ubmV0L28xL3YvdDIvZjIvbTY5L0FRTUZBLVY4ZzV4N1Q0N1F1QXE1SDE2NTVMaDNlNEdJMHhlR2tCbnZiQkI1TW1PS0NRVVlaYmpURHFkWHNfRjIyVjJKbHN6QTlPLUN4X3dfNkZTWk5YancubXA0P2VmZz1leUprZFhKaGRHbHZibDl6SWpveU1UTXNJblpwWDNWelpXTmhjMlZmYVdRaU9qRXdNVEl5TENKNGNIWmZZWE56WlhSZmFXUWlPakV4TlRVNE9UZzVNekk0TlRJME9Ua3NJblpsYm1OdlpHVmZkR0ZuSWpvaWVIQjJYM0J5YjJkeVpYTnphWFpsTGtaQlEwVkNUMDlMTGk1RE15NDNNakF1WkdGemFGOW9NalkwTFdKaGMybGpMV2RsYmpKZk56SXdjQ0o5Jl9uY19odD12aWRlby1taWEzLTIueHguZmJjZG4ubmV0Jl9uY19jYXQ9MTExJl9uY19vYz1BZGlFeEQ5aThXLWJpNzhhQXktalF0cUFmTnBoSjZJaFYwbDI0MjhoTnZDR3V0REVDd256eTFmQThnR0FZM2JWWnFZJnN0cmV4dD0xJnZzPTU4ZjgzNDljOTk2Y2EzNTgmX25jX3ZzPUhCa3NGUUlZT25CaGMzTjBhSEp2ZFdkb1gyVjJaWEp6ZEc5eVpTOUhTamwxY1VKNVJsSk9hekZVVkdOSlFVUkNka3M0VTFGaWVXc3RZbTFrYWtGQlFVWVZBQUxJQVFBVkFoZzZjR0Z6YzNSb2NtOTFaMmhmWlhabGNuTjBiM0psTDBkR1ZHZDBVbnBYY1ZSZlZHWkVjMFZCU2pNdFoyWXlTalZSZUhWaWNrWnhRVUZCUmhVQ0FzZ0JBQ2dBR0FBYkFvZ0hkWE5sWDI5cGJBRXhFbkJ5YjJkeVpYTnphWFpsWDNKbFkybHdaUUV4RlFBQUpxYmN6NVNXMG8wRUZRSW9Ba016TEJkQWFxdTJSYUhLd1JnWlpHRnphRjlvTWpZMExXSmhjMmxqTFdkbGJqSmZOekl3Y0JFQWRRSUEmY2NiPTktNCZvaD0wMF9BWUgwTWtZVnVHUHB2VGRKTjFYWDFPdDZGcnZSZUlrOWN6ajQxc2Z0bGtpNHp3Jm9lPTY3Q0NCMkZCJl9uY19zaWQ9MWQ1NzZk",
      "sd": "http://oneapiserver.vercel.app/download/id?data=https%3A%2F%2Fssscdn.io%2Fgetmyfb%2FaHR0cHM6Ly92aWRlby1taWEzLTMueHguZmJjZG4ubmV0L28xL3YvdDIvZjIvbTY5L0FRUEF2MGFrdmU1OV9mUTJRVk5mWnBTZXNPYnVuY3hJVVFXbHg1WktNMHNELUptelZvZ1ZqWnRUUFJRYjZRalNNbXBfdmJmSWttUEJOM2RodjhfVFowUXcubXA0P3N0cmV4dD0xJl9uY19jYXQ9MTA4Jl9uY19zaWQ9OGJmOGZlJl9uY19odD12aWRlby1taWEzLTMueHguZmJjZG4ubmV0Jl9uY19vaGM9SVZCbHJMVjBGMDBRN2tOdmdFcG8zSWMmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SW5od2RsOXdjbTluY21WemMybDJaUzVHUVVORlFrOVBTeTR1UXpNdU16WXdMbk4yWlY5elpDSXNJbmh3ZGw5aGMzTmxkRjlwWkNJNk1URTFOVGc1T0Rrek1qZzFNalE1T1N3aWRtbGZkWE5sWTJGelpWOXBaQ0k2TVRBeE1qSXNJbVIxY21GMGFXOXVYM01pT2pJeE15d2lkWEpzWjJWdVgzTnZkWEpqWlNJNkluZDNkeUo5JmNjYj0xNy0xJl9uY196dD0yOCZvaD0wMF9BWUdMcjB0QUl2NlFlb2IxUm5RVlY3Z0c0TWlUd3A4VkVSVG5wWDNnRjg1RTVnJm9lPTY3RDA5NjE2"
    }
  }
}
        </pre>
    </section>
    <footer>
        <p>&copy; 2025 API Documentation | Made with ❤️ by iwan</p>
    </footer>

</body>
</html>`
res.send(html)
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
