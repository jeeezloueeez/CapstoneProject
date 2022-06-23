const productID = document.getElementById('product-id')
const itemResults = document.querySelector('.item-results')
const tableTitle = document.getElementById('categories')
const bottomBorder = document.getElementById('item-results')
const form = document.getElementById('search-form')
const photo = document.querySelectorAll('.image-section')
const text = document.querySelectorAll('.text-section')
const pricing = document.querySelectorAll('.pricing-section')
const savedItems = document.getElementById('saved-items')
const deleteBtn = document.getElementById('delete-button')
const saveBtn = document.getElementById('save-button')
const savedLists = document.getElementById('list-section')

const baseURL = `http://localhost:5011`

let globalId = 1

const searchItem = (evt) => {
  evt.preventDefault()
  let idNumber = productID.value
  axios
    .get(`${baseURL}/product/${idNumber}`)
    .then(res => {
      const { productId, title, price, image } = res.data
      
      let newSection = document.createElement('div')
      newSection.classList.add('item')
      newSection.setAttribute('id', `${globalId}`)
      itemResults.appendChild(newSection)
      globalId++

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
      newSection.appendChild(textSection)

      let newPrice = document.createElement('div')
      newPrice.classList.add('pricing-section')
      let cost = document.createElement('h3')
      cost.textContent = `$${price}`
      newPrice.appendChild(cost)
      newSection.appendChild(newPrice)

      tableTitle.style.visibility = 'visible'
      bottomBorder.style.visibility = 'visible'
      saveBtn.style.visibility = 'visible'
      deleteBtn.style.visibility = 'visible'
    })
    .catch(err => {console.log(err)})
  productID.value = ''
}


const saveList = (evt) => {
  evt.preventDefault()
  axios
  .post(`${baseURL}/saved`)
  .then(res => {
    savedLists.style.visibility = 'visible'
    let items = res.data
    console.log(items)
    let list = document.createElement('div')
    list.classList.add('job-materials')
    savedItems.appendChild(list)
    items.forEach(element => {
      let text = element.productId

      let newText = document.createElement('h4')
      newText.textContent = text
      list.appendChild(newText)

    })
  })
  .catch(err => {console.log(err)})
}

const deleteItem = (evt) => {
  evt.preventDefault()
  let div = document.getElementById(`${globalId - 1}`)
  if (globalId > 2) {
    div.remove()
    globalId--
  } else {
    globalId--
    div.remove()
    saveBtn.style.visibility = 'hidden'
    tableTitle.style.visibility = 'hidden'
    bottomBorder.style.visibility = 'hidden'
    deleteBtn.style.visibility = 'hidden'
  }

  axios
    .delete(`${baseURL}/delete`)
    .then(res => {

    })
    .catch(err => {console.log(err)})
}

form.addEventListener('submit', searchItem)
deleteBtn.addEventListener('click', deleteItem)      
saveBtn.addEventListener('click', saveList)