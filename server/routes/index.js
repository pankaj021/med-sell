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
router.post('/visit', (req, res, next) => {
    
    res.json({
        otherComment: req.body.otherComment,
        town: req.body.town,
        chemist: req.body.chemist,
        doctor: req.body.doctor,
        product: req.body.product,

    })
});
router.post('/delete', (req, res, next) => {
    
    res.json({
        id : req.body.id
    })
});

router.post('/edit', (req, res, next) => {
    //console.log('req>>>>>>>>>>>>>>',req.body)
    res.json({
        
        otherComment: req.body.otherComment,
        town: req.body.town,
        chemist: req.body.chemist,
        doctor: req.body.doctor,
        product: req.body.product,


    })
});
router.get('/ddData', (req, res, next) => {
    //console.log('req>>>>>>>>>>>>>>',req.body)
    res.json({
        
        townOptions: [{"title": "Mumbai", "value": "Mumbai"}, {"title": "Delhi", "value": "Delhi"}],
    })
});

module.exports = router;
