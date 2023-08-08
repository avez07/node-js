import fs from 'fs';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {jsonData} from './app.js';
import { promises } from 'dns';
import { rejects } from 'assert';


// const app = require('./app');
// const http = require('http');
// import http from 'http';

// const input = process.argv;

// http.createServer((req, res) => {
//     res.write(jsonData);
//     res.end();
// }).listen(5000);



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dirpath = path.join(__dirname, 'files');
console.log(dirpath);
// const input = process.argv;

// if (input[2] == "add") {
//     fs.writeFileSync('hello',input[2])
// }
// const read = fs.readFile('hello','utf-8',(err,item)=>{
//     console.log(item)
// });
// fs.appendFile('hello','this file is updated',(err)=>{
//     if (err) {
//         console.log(err)
//     }
// })

// fs.rename('ansari','aavez.php',(err)=>{
//     if (err) {
//         console.log(err)
//     }
// }
// fs.unlinkSync('aavez.php')

//promisies

// let a = 10;
// let b =  0;



// const waitData = new Promise((resolve,rejects)=>{
//     setTimeout(() => {
//         resolve(30)
//     }, 2000);
// })
// waitData.then((data)=>{
//     console.log(a+data);
// })




