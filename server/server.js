let express = require('express');
let cors = require('cors');
const axios = require('axios')
const dotEnv = require('dotenv-webpack')

const app = express();
// const url = 
app.use(cors());
app.use(express.json());

const controllerFile = require('./controller')

app.get('/api/product', controllerFile.getID)





app.listen(5011, console.log('server is running on 5011'));