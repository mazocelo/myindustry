const express = require('express');
const router = express.Router();
//const db = require('../db')


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(req.user);
});

router.post('/novaMeta', function(req, res, next) {
    db.findSomething()


})


module.exports = router;