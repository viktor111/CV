const  express = require('express');
const router = express.Router();

router.get('/test', function(req, res, next) {
    res.render('test.hbs');
});

module.exports = router;