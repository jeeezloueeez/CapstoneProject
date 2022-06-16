module.exports = {
  getID: (req, res) => {
    console.log('hit')
    res.status(200).send('hit')
  },
}