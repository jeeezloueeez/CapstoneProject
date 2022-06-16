let express = require('express');
let cors = require('cors');
const axios = require('axios')
const dotEnv = require('dotenv-webpack')

const app = express();
// const url = 
app.use(cors());
app.use(express.json());

const controllerFile = require('./controller')
let apiKey = process.env.API_KEY

app.get('/product/:id', (req, res) => {
  let productID
  const { id } = req.params
  axios
    .get(`https://serpapi.com/search.json?engine=home_depot_product&product_id=${id}&api_key=${apiKey}`)
    .then(res => {
      productID = res.data
      console.log(productID)
    })
    .catch(err => {console.log(err)})
  res.status(200).send(console.log(productID))
})





app.listen(5011, console.log('server is running on 5011'));