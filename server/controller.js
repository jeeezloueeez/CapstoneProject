require('dotenv').config()
const apiKey = process.env.API_KEY
const axios = require('axios')
const items = require('./db.json')

module.exports = {
  searchItem: (req, res) => {
    const { id } = req.params
    axios
      .get(`https://serpapi.com/search.json?engine=home_depot_product&product_id=${id}&api_key=${apiKey}`)
      .then(response => {
        const { search_parameters } = response.data
        const { product_id } = search_parameters
        const { product_results } = response.data
        const { title, price, images } = product_results
        for (let i = 0; i < items.length; i++) {
          if (items[i].productID === product_id) {
            console.log('You currently have this item on your list.')
          }
        }
        let item = {
          productId: product_id,
          title,
          price,
          image: images[0][0],
        }
        items.push(item)
        res.status(200).send(items)
      })
      .catch(err => {console.log(err)})
  },
  saveList: (req, res) => {
    console.log(req.params. req.query, req.body)
  },
}