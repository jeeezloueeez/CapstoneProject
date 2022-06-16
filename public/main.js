let productID = document.getElementById('product-id')
const form = document.getElementById('search-form')

const searchID = (evt) => {
  evt.preventDefault()
  axios
    .get('http://localhost:5011/api/product/')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {console.log(err)})
  productID.value = ''
}


form.addEventListener('submit', searchID)






