import fs from "fs";
import express from "express";
import router from '../router/addrouter.js'
import { MongoClient } from "mongodb";
import dbConnect from "../config.js";
import multer from "multer";
import { exit } from "process";

const app = express();
app.use(express.json());

// file upload middleware

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./api/upload");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.filename + "-" + Date.now() + ".jpg");
//     },
//   }),
// }).single("file_");

// app.post("/", async (req, res) => {
//   var data = req.body;
//   try {

//      const db = await dbConnect();
//     const collection = db.collection("user_login");
//     var response = await collection.find(data).toArray();
//     res.status(200).send(response);

//   } catch (error) {
//     res.status(401).send('An mongodb error is occurring'+error)
//   }
// });
//search api
// app.get("/search/:key", async (req, res) => {
//   console.log(req.params.key)
//   try {
//     const db = await dbConnect();
//     const collection =  db.collection("user_login");
//     var response = await collection.find({
//       "$or": [
//         {
//           'name': {$regex: req.params.key},
//         },
//       ],
//     }).toArray();
//     res.status(200).send(response);
//   } catch (error) {
//     res.status(500).send("An error is Occurring" + error);
//   }
// });

// file upload
// app.post("/upload", upload, (req, res) => {
//   console.log(req.file.filename);
//   res.status(200).send("file uploaded");
// });
app.use('/api',router)
app.listen(5500);
