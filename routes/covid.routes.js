'use strict';

const express = require('express');

const router = express.Router();

function getCards(req, res) {
  res.send('getCards route');
}

function addCard(req, res) {
  res.send('addCard route');
}

function deleteCards(req, res) {
  res.send('deleteCard route');
}

router.get('/getCards', getCards);
router.post('/addCard', addCard);
router.delete('/deleteCard', deleteCards);



module.exports = router;





