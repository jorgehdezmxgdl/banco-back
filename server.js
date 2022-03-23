const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes/RouteLogin')
//const cors = require('cors')

const app = express();

//app.use(cors());

app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use('/', routes)

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`El servidor esta listo en: ${PORT}.`);
});