import express from 'express';
import addController from '../Controller/AddController.js'
const router = express.Router();
const app = express();
app.use(express.json()); //convert the data to json data


router.get('/get',addController.addData);
router.post('/insert',addController.insertData);


export default router;