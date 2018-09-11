var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
var db=require('../dbconnection'); //reference of dbconnection.js

 
 //pdb.connect();

/* GET all users listing. */
router.get('/', function(req, res, next) {  
  db.query('SELECT * from patient', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

module.exports = router;
