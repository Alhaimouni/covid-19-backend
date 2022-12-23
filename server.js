'use strict';

const express = require('express');
const cors = require('cors');
const notFound = require('./errorHandlers/404');
const internalError = require('./errorHandlers/500');
const cardsRoutes = require('./routes/covid.routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(cardsRoutes);
app.use('*', notFound);
app.use(internalError);

function start(port) {
  app.listen(port, () => {
    console.log(`Server is running at : ${port}`);
  });
}


module.exports = {
  start
}