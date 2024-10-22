const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: '../.env'})

mongoose.connect(process.env.LOCAL_DB_URI).then(()=>console.log(`Connected to myfarm Database`));
