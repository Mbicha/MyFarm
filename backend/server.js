const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookie = require('cookie-parser');
require('./config/config');

const auth = require('./routes/auth');
const farm = require('./routes/farm');
const produce = require('./routes/produce');
const subscription_plan = require('./routes/subscription_plan');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookie());

//routes
app.use('/myfarm/auth', auth);
app.use('/myfarm/farm', farm);
app.use('/myfarm/produce', produce)
app.use('/myfarm/subscription', subscription_plan)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    
})
