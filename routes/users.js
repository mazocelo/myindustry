var express = require('express');
var router = express.Router();

var NeDB = require('nedb')
var db = new NeDB ({
    filename: 'industrias.db',
    autoload: true
    
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.user);
});

router.post('/novaMeta', function(req,res,next){
 
  db.update({username:req.user.username},{$set:{orders: req.body}}, err=>{
    if(err){
      console.log(err)
      res.status(400);
    }else{
      console.log(req.body, 'ok')
      Object.assign(req.user,req.body)
      res.status(200).redirect('/')

    }
  });
 
})


module.exports = router;
