var express = require('express');
var router = express.Router();
//var db = require('../db')

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://adm:chari@myind.vcufe.mongodb.net/MyInd?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


router.post('/', function(req, res, next) {

    client.connect(err => {
        const collection = client.db("myInd").collection("users");
        // perform actions on the collection object
        var obj = req.body
        console.log('conectou', obj)
        collection.insertOne(req.body, function(err, resp) {
            if (err) {
                console.log(resp, err)
                throw err
            }
            console.log("1 document inserted", resp);
            res.redirect('/login')
                //client.close()
        })

    });
})
module.exports = router;

/*
db.collection("devices").insertOne(`${req.body}`, function(err, res) {
     if (err) throw err;
     var dbo = db.db("mydb");
     var myobj = req.body
     dbo.collection("users").insertOne(myobj, function(err, resp) {
         if (err) throw err;
         console.log("1 document inserted");
         db.close();
         res.redirect('/login')
     })


 });
*/