const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hellooo!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});