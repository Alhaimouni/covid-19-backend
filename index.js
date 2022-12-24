'use strict';

const { start } = require('./server');
const { sequelize } = require('./models/index');
require('dotenv').config();
const { PORT } = require('./config');




sequelize.sync()
  .then(() => { start(PORT) })
  .catch(() => { console.log(`cannot sync models with Database `) });