'use strict';

const express = require('express');
const { cardModel } = require('../models/covid.model');

const router = express.Router();

function getRecords(req, res, next) {
  try {
    cardModel.find({}, ((err, result) => {
      if (err) {
        next(`${err}`);
      } else {
        res.status(200).send(result);
      }
    }));
  } catch (error) {
    next(`inside getCards handler : ${error}`);
  }
}

function addRecord(req, res, next) {
  try {
    cardModel.create(req.body);
    cardModel.find({}, (err, result) => {
      if (err) {
        next(`${err}`);
      } else {
        res.status(201).send(result);
      }
    });
  } catch (error) {
    next(`inside addCard handler : ${error}`);
  }
}

function deleteRecord(req, res, next) {
  try {
    const { id } = req.params;
    cardModel.remove({ _id: id }, (err, result) => {
      if (err) {
        next(`${err}`);
      } else {
        res.send(`Deleted`);
      }
    });
  } catch (error) {
    next(`inside deleteCard handler : ${error}`);
  }
}

router.get('/getrecords', getRecords);
router.post('/addrecord', addRecord);
router.delete('/deleterecord/:id', deleteRecord);



module.exports = router;





