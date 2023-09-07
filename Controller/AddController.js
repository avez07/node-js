import express from 'express';
import dbconnect from '../config.js'

const app = express()
app.use(express.json());

const addData = async(req,res)=>{
let data = req.body;
console.log(data);
const db = await dbconnect();
const collection =   db.collection('user_login')
var response = await collection.find(data).toArray()
    res.status(200).send(response);
}
const insertData = async(req,res)=>{
    let data = req.body;
    const db = await dbconnect();
    const collection =   db.collection('user_login')
    var response = await collection.insertOne(data);
        res.status(200).send(response);
    }

export default {addData,insertData}

