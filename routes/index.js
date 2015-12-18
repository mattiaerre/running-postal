var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.dir(req.device);
  res.render('index', { title: 'Express', device: JSON.stringify(req.device, null, 2) });
});

module.exports = router;
