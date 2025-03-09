const axios = require('axios');

function delay(seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
}

const yt = async (url) => {
const headers = {
  'Accept': '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8,id;q=0.7',
  'Cache-Control': 'no-cache',
  'Origin': 'https://4kdownload.to',
  'Pragma': 'no-cache',
  'Priority': 'u=1, i',
  'Referer': 'https://4kdownload.to/',
  'Sec-CH-UA': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
  'Sec-CH-UA-Mobile': '?0',
  'Sec-CH-UA-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'cross-site',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
};
let tries = 15;
const progress = async (id) => {
try{
  if(tries < 0)return {success:0, message:'API progress limit , coba lagi nanti'}
  let prog = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${id}`, { headers })
  if(prog.data.success == 0){
    await delay(10)
    tries -= 1
    return await progress(id)
  }
return prog.data
}catch (error) {
  return {success:0, message:error.message}
}
}
try{
let getdata = await axios.get(`https://p.oceansaver.in/ajax/download.php?copyright=0&format=aac&url=${encodeURIComponent(url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`, { headers })
if(getdata.status == 200){
return await progress(getdata.data.id)
}else{
  return {success:0, message:"Axios Error"}
}

}catch (error) {
  return {success:0, message:error.message}
}
  
}
module.exports = yt
