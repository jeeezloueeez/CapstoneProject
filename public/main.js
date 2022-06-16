const productID = document.getElementById('product-id')
const form = document.getElementById('search-form')

const searchID = (evt) => {
  evt.preventDefault()
  let idNumber = productID.value
  axios
    .get(`http://localhost:5011/product/${idNumber}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {console.log(err)})
  productID.value = ''
}


form.addEventListener('submit', searchID)






