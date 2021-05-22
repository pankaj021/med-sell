const express = require('express');
const router = express.Router();
const {getAll, getOne, createOne, updateOne, deleteOne, getOneByEmail, getOneByTargetId} = require('../controllers/donations');
const authHandler = require('../middlewares/auth');

router.get('/', getAll);
router.get('/email', getOneByEmail);
router.get('/target/:id', getOneByTargetId);
router.get('/:id', getOne);
router.post('/', authHandler, createOne);
router.put('/:id', authHandler, updateOne);
router.delete('/:id', authHandler, deleteOne);

module.exports = router;
