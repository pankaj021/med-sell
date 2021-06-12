const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/home', (req, res, next) => {
    res.render('index');
});

router.post('/login', (req, res, next) => {
    res.json({
        username: req.body.username
    })
});

module.exports = router;
