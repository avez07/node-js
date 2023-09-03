import dotenv from 'dotenv'
import { MongoClient } from "mongodb";

dotenv.config();
var url = process.env.MONGODB_URL;
var Client = new MongoClient(url);


const dbConnect = async()=>{
try{
    await Client.connect();
    var db = Client.db(); 
    return db;
} catch(error){
    console.log(error);
}
   
}
dbConnect();
export default dbConnect;