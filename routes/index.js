var express = require('express');
var router = express.Router();

/* redirect to catalog.js */
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});

module.exports = router;
