import fs from 'fs';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';

const app = express();
app.set('view engine', 'ejs');

// middware
// const filter=(req, res, next)=>{
//     if (req.query.name == "Ansari avez") {
//         next();
//     } else{
//         res.send('please set the name')
//     }
// }
// app.use(filter);


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const dirpath = path.join(__dirname, '../public');

// //seting the path of view folder because the view folder is always in the man folder which is not there in my case...

// app.set('views', path.join(__dirname, 'views')); // Set the views directory

// app.use(express.static(dirpath)); // Serve static files from the 'public' directory

// app.get('', (req, res) => {
//     res.sendFile(`${dirpath}/about.html`);
// });
// app.get('/profile', (req, res) => {
//     const profilePath = path.join(__dirname, '../views/profile');
//     const data = {
//         name : 'ansari avez',
//         skills: ['php','html','css']
//     }
//     res.render(profilePath,{data}); // Assuming 'profile.ejs' is in the 'views' directory
// });

// app.get('*',(req,res)=>{
//     res.sendFile(`${dirpath}/404_page.html`);
// });




app.listen(5000);




