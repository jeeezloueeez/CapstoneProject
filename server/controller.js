require('dotenv').config()
const apiKey = process.env.API_KEY
const axios = require('axios')

module.exports = {
  getID: (req, res) => {
    let productInfo
    const { id } = req.params
    axios
      .get(`https://serpapi.com/search.json?engine=home_depot_product&product_id=${id}&api_key=${apiKey}`)
      .then(response => {
        productInfo = response.data
        res.status(200).send(productInfo)
      })
      .catch(err => {console.log(err)})
  },
}