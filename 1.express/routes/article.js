let express = require('express');
let router = express.Router();

router.get('/add',function (req,res) {
    res.send('add');
});

module.exports = router;