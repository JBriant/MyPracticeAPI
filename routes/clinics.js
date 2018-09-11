var express = require('express');
var router = express.Router();
var pdb=require('../dbconnection'); //reference of dbconnection.js

 
 //pdb.connect();

/* GET all users listing. */
router.get('/', function(req, res, next) {  
  pdb.query('SELECT * from clinics', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Get single user listing
router.get('/:id', function(req, res, next) {  
  let user_id = req.params.id;

  if(!user_id){
    return res.status(400).send({error: true, message: 'Please provide User ID'})
  }

  pdb.query('SELECT * from clinics WHERE id =?', user_id, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
  
});

//Add new user
router.post('/', function(req, res, next) {  
  let user = req.body.user;

  if(!user){
    return res.status(400).send({error: true, message: 'Please provide User'})
  }

  pdb.query('INSERT INTO clinics SET ?',{user: user}, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Delete a user
router.delete('/:id', function(req, res, next) {  
  let user_id = req.params.id;

  if(!user_id){
    return res.status(400).send({error: true, message: 'Please provide User ID'})
  }

  pdb.query('DELETE FROM clinics WHERE id =?',[user_id], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Update a user
router.put('/', function(req, res, next) {  
  let user_id = req.body.user_id;
  let user = req.body.user;

  if(!user_id || !user){
    return res.status(400).send({error: true, message: 'Please provide User ID'})
  }

  pdb.query('DELETE FROM clinics WHERE id =?',[user_id], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

module.exports = router;
