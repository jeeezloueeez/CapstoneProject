module.exports = {
  getID: (req, res) => {
    let productID
    const { id } = req.params
    axios
      .get(``)
      .then(res => {
        productID = res.data
      })
      .catch(err => {console.log(err)})
    res.status(200).send(productID)
  },
}