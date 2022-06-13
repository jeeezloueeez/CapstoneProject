let express = require('express');
let cors = require('cors');
const axios = require('axios')
const app = express();

app.use(cors());
app.use(express.json());








app.listen(5011, console.log('server is running on 5011'));