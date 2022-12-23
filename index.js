'use strict';

const { start } = require('./server');
require('dotenv').config();
const { PORT } = require('./config');

start(PORT);
