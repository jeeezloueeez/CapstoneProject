const productID = document.getElementById('product-id')
const form = document.getElementById('search-form')
const itemResults = document.querySelector('.item-results')
const saveButton = document.getElementById('save-button')

const url = 'http://localhost:5011'

const searchID = (evt) => {
  evt.preventDefault()
  let idNumber = productID.value
  axios
    .get(`/product/${idNumber}`)
    .then(res => {
      const { product_results } = res.data
      const { images, title, price } = product_results
      console.log(images)
      let newSection = document.createElement('div')
      newSection.classList.add('item')
      itemResults.appendChild(newSection)
      let image = document.createElement('img')
      image.src = images[0][0]
      newSection.appendChild(image)
      let productName = document.createElement('h3')
      productName.textContent = title
      newSection.appendChild(productName)
      let cost = document.createElement('h4')
      cost.textContent = `$${price}`
      newSection.appendChild(cost)
      saveButton.style.visibility = 'visible'
    })
    .catch(err => {console.log(err)})
  productID.value = ''
}

const saveList = (evt) => {
  evt.preventDefault()

  axios
    .post()
    .then()
    .catch(err => {console.log(err)})
}


form.addEventListener('submit', searchID)
saveButton.addEventListener('click', saveList)






