var express = require('express');
var router = express.Router();

var NeDB = require('nedb')
var db = new NeDB ({
    filename: 'industrias.db',
    autoload: true
    
});

db.loadDatabase();
router.post('/', function(req, res, next) {
    
    db.loadDatabase();  
    db.insert(req.body,err=>{
        if(err){
            
                console.log(`error ${err}`);
                res.status(400).json({
               
            })
        }
        else{
            res.status(200).redirect('/login')
        }
    })
});

module.exports = router;