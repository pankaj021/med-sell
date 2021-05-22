const express = require('express');
const router = express.Router();
const getContacts = require('../controllers/getContacts');

router.post('/', getContacts);

module.exports = router;
