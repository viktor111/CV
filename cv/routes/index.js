const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index-Controller.js');

/* GET home page. */
router.get('/', indexController.getIndex);
router.get('/test', function (req, res) {
    res.render('test.hbs')
});
module.exports = router;
