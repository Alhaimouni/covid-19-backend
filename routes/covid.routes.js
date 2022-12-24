'use strict';

const express = require('express');
const { recordModel } = require('../models');

const router = express.Router();

async function getRecords(req, res, next) {
  try {
    let records = await recordModel.findAll();
    res.status(200).send(records);
  } catch (error) {
    next(`inside getCards handler : ${error}`);
  }
}

async function addRecord(req, res, next) {
  try {
    await recordModel.create(req.body);
    res.status(201).send('Created');
  } catch (error) {
    next(`inside addCard handler : ${error}`);
  }
}

async function deleteRecord(req, res, next) {
  try {
    const { id } = req.params;
    await recordModel.destroy({ where: { id: id } });
    res.status(202).send('Deleted');
  } catch (error) {
    next(`inside deleteCard handler : ${error}`);
  }
}

router.get('/record', getRecords);
router.post('/record', addRecord);
router.delete('/record/:id', deleteRecord);



module.exports = router;










// function getRecords(req, res, next) {
//   try {
//     cardModel.find({}, ((err, result) => {
//       if (err) {
//         next(`${err}`);
//       } else {
//         res.status(200).send(result);
//       }
//     }));
//   } catch (error) {
//     next(`inside getCards handler : ${error}`);
//   }
// }

// function addRecord(req, res, next) {
//   try {
//     cardModel.create(req.body);
//     cardModel.find({}, (err, result) => {
//       if (err) {
//         next(`${err}`);
//       } else {
//         res.status(201).send(result);
//       }
//     });
//   } catch (error) {
//     next(`inside addCard handler : ${error}`);
//   }
// }

// function deleteRecord(req, res, next) {
//   try {
//     const { id } = req.params;
//     cardModel.remove({ _id: id }, (err, result) => {
//       if (err) {
//         next(`${err}`);
//       } else {
//         res.send(`Deleted`);
//       }
//     });
//   } catch (error) {
//     next(`inside deleteCard handler : ${error}`);
//   }
// }
