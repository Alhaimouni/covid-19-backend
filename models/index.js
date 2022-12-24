'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const createRecord = require('./record.model');
require('dotenv').config();
const { POSTGRES_URL } = require('../config');


const sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

const sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

sequelize.authenticate()
  .then(() => { console.log(` Connected to DMBS`) })
  .catch((reject) => { console.log(`Rejected : ${reject}`) });


const recordModel = createRecord(sequelize, DataTypes);


module.exports = { sequelize, recordModel };

