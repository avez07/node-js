import fs from 'fs';
import dotenv from 'dotenv';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import {jsonData} from './app.js';
import { promises } from 'dns';
import { rejects } from 'assert';
import {MongoClient} from 'mongodb';
import express from 'express';

const app = express();
dotenv.config();
var url = process.env.MONGODB_URL;
var Client =  new MongoClient(url)

var data = [{
    name: 'ansari avez',
    phone: '999999999',
},
{
    name:'ansari avez',
    phone : '999999999s'
}];



// app.get('', async (req, res) => {
//     try {
//         await Client.connect();
//         let db = Client.db(); // No need to specify the database name here
//         let collection = db.collection('user_login');
//         let filter = {name: 'ansari avez'} 
//         let update = {$set :{phone: '0987654321'}}
//         let response = await collection.insertMany(data);
//         // var data = [{
//         //     message : 'sussessces',
//         //     data: response
//         // }];
           
//         res.send(response);
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         res.status(500).send('Error connecting to MongoDB');
//     } finally {
//         Client.close(); // Close the connection after use
//     }
// });

// app.get('', async (req, res) => {
//     try {
//         await Client.connect();
//         let db = Client.db(); // No need to specify the database name here
//         let collection = db.collection('user_login');
//         let filter = {name: 'ansari avez'} 
//         let update = {$set :{phone: '0987654321'}}
//         let response = await collection.updateMany(filter,update);
//         const data_2 = [{
//             message : 'sussessces',
//             data: response
//         }];
           
//         res.send(data_2);
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         res.status(500).send('Error connecting to MongoDB');
//     } finally {
//         Client.close(); // Close the connection after use
//     }
// });

// app.get('', async (req, res) => {
//     try {
//         await Client.connect();
//         let db = Client.db(); // No need to specify the database name here
//         let collection = db.collection('user_login');
//         let delete_ = {name: 'ansari avez'} 
//         let update = {$set :{phone: '0987654321'}}
//         let response = await collection.deleteOne(delete_);
//         const data_2 = [{
//             message : 'sussessces',
//             data: response
//         }];
           
//         res.send(data_2);
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         res.status(500).send('Error connecting to MongoDB');
//     } finally {
//         Client.close(); // Close the connection after use
//     }
// });

app.get('', async (req, res) => {
    try {
        await Client.connect();
        let db = Client.db(); // No need to specify the database name here
        let collection = db.collection('user_login');
        let find = {name: 'ansari avez'} 
        let update = {$set :{phone: '0987654321'}}
        let response = await collection.deleteMany(find);
        const data_2 = [{
            message : 'sussessces',
            data: response
        }];
           
        res.send(data_2);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        res.status(500).send('Error connecting to MongoDB');
    } finally {
        Client.close(); // Close the connection after use
    }
});
app.listen(5000);

