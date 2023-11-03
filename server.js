import express from 'express';
const app = express();

import bodyParser from 'body-parser';
import cors from 'cors'
import axios from 'axios'

app.use(cors());
app.use(bodyParser.json());

//Create your endpoints HERE
let dogPhoto
try {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random')
  dogPhoto = response.data.message
} catch (err) {
  console.log('Error:', err);
}

app.listen(8001, function () {
  console.log('App running on port 8001');
});

app.get('/', (req, res) => {
  console.log(dogPhoto);
  res.render('generateImage')
})