const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ 
    title: 'Kampung Kopi Backend',
    version:'v1.0'
  });
});

module.exports = router;
