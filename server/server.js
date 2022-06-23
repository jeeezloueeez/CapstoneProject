require('dotenv').config()

const path = require('path')
let express = require('express');
let cors = require('cors');
const axios = require('axios')
const dotEnv = require('dotenv-webpack')

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('public'))

const controllerFile = require('./controller')


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})
app.get('/product/:id', controllerFile.searchItem) 


app.post('/saved', controllerFile.saveList)

app.put('/update', controllerFile.updateList)

// app.delete('/delete', controllerFile.deleteItem)





const port = process.env.PORT || 5011
app.listen(port, () => console.log(`listening on ${port}`));