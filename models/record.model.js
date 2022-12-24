'use strict';

module.exports = function createRecordModel(sequelize, DataTypes) {
  return (sequelize.define('record', {
    country: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.STRING, allowNull: false }
  }));
};