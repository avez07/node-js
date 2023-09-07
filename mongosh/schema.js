// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const connectdb = async ()=>{
//     mongoose.connect(process.env.MONGODB_URL);
//     const productSechma = new mongoose.Schema({
//         name:{
//            type: String,
//             require:true,
//         }
//     });
//     const product = mongoose.model('user_login', productSechma,'user_login');
//     const data = await product.find({name:'ansari'});
//     console.log(data);
// }
// connectdb();
// app.listen(5000);