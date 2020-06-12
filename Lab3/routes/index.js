'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Family' });
});

router.get('/vraj', function (req, res) {
    res.render('vraj', { title: 'Vraj' });
});


router.get('/dharmesh', function (req, res) {
    res.render('dharmesh', { title: 'Dharmesh' });
});

    router.get('/shilpa', function (req, res) {
        res.render('shilpa', { title: 'Shilpa' });
    });


    router.get('/namra', function (req, res) {
        res.render('namra', { title: 'Namra' });
    });

    module.exports = router;
