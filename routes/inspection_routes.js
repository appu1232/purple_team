var express = require('express');

var router = express.Router();

router.get('/', (req,res) => {
	res.render('all_inspections');
});

router.get('/new', (req,res) => {
	res.render('new_inspection');
});


module.exports = router;
