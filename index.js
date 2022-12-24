'use strict';

const { start } = require('./server');
const mongoose = require('mongoose');
require('dotenv').config();

const { PORT, DB } = require('./config');

mongoose.connect(DB);
start(PORT);