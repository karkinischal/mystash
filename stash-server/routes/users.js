const e = require('express');
var express = require('express');
var router = express.Router();
const db = require('../db/connection');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const results =  await db.promise().query(`SELECT * FROM users;`);
    res.status(200).send(results[0]);
  }
  catch(err){
    console.log(err);
  }
});
router.get('/:name', async (req,res,next)=>{
  try{
    const {name} = req.params;
    //const results = await db.promise().query(`SELECT * FROM users WHERE firstname = '${name}';`);
    const results = await db.promise().query(`SELECT * FROM users WHERE firstname = '${name}';`);
    if(results[0].length<1){res.status(404).send('User not found');}
    else{res.status(200).send(results[0]);}
  }
  catch(err){
    console.log(err);
  }  
});

router.post('/join', function(req,res){
  res.send(201);
  
});
module.exports = router;
