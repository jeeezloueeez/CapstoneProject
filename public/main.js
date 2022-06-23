const productID = document.getElementById('product-id')
const itemResults = document.querySelector('.item-results')
const tableTitle = document.getElementById('categories')
const bottomBorder = document.getElementById('item-results')
const form = document.getElementById('search-form')
const photo = document.querySelectorAll('.image-section')
const text = document.querySelectorAll('.text-section')
const pricing = document.querySelectorAll('.pricing-section')

const deleteBtn = document.getElementById('delete-button')




globalId = 0

const searchItem = (evt) => {
  evt.preventDefault()
  let idNumber = productID.value
  axios
    .get(`/api/product/${idNumber}`)
    .then(res => {
      const { productId, title, price, image } = res.data
      console.log(productId)

      // const { product_results } = res.data
      // const { images, title, price } = product_results
      
      let newSection = document.createElement('div')
      newSection.classList.add('item')
      newSection.setAttribute('id', `${productId}`)
      itemResults.appendChild(newSection)

      let newImage = document.createElement('div')
      newImage.classList.add('image-section')
      let images = document.createElement('img')
      images.src = image
      newImage.appendChild(images)
      newSection.appendChild(newImage)

      let textSection = document.createElement('div')
      textSection.classList.add('text-section')
      let productName = document.createElement('h3')
      productName.textContent = title
      textSection.appendChild(productName)
      let saveButton = document.createElement('button')
      saveButton.classList.add('save-button')
      saveButton.setAttribute('id', 'save-button')
      saveButton.textContent = 'SAVE ITEM'
      textSection.appendChild(saveButton)
      let deleteButton = document.createElement('button')
      deleteButton.classList.add('delete-button')
      deleteButton.setAttribute('id', 'delete-button')
      deleteButton.textContent = 'DELETE'
      textSection.appendChild(deleteButton)
      newSection.appendChild(textSection)

      let newPrice = document.createElement('div')
      newPrice.classList.add('pricing-section')
      let cost = document.createElement('h3')
      cost.textContent = `$${price}`
      newPrice.appendChild(cost)
      newSection.appendChild(newPrice)

      tableTitle.style.visibility = 'visible'
      bottomBorder.style.visibility = 'visible'
    })
    .catch(err => {console.log(err)})
  productID.value = ''
}

const saveBtn = document.getElementById('save-button')

const saveList = (evt) => {
  evt.preventDefault()
  axios
  .post(`/api/saved`)
  .then(res => {
    
  })
  .catch(err => {console.log(err)})
}

// const deleteItem = (evt) => {
  //   evt.preventDefault()
  //   let div = document.getElementById(`${globalId - 1}`)
  //   if (globalId > 2) {
    //     div.remove()
    //     globalId--
    //   } else {
      //     globalId--
      //     div.remove()
      //     saveButton.style.visibility = ''
      //     tableTitle.style.visibility = ''
      //     bottomBorder.style.visibility = ''
      //     deleteBtn.style.visibility = ''
      //   }
      // }
      
      
form.addEventListener('submit', searchItem)
      // deleteBtn.addEventListener('click', deleteItem)
      
saveBtn.addEventListener('click', saveList)