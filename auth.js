var DbControl = require('./model/DbControl')
var Datastore = require('nedb')
//const bcrypt = require('bcryptjs')
const LocalStrategy = require('passport-local').Strategy
//bcrypt.hashSync()


var Db = new DbControl()
module.exports = function (passport){

    passport.serializeUser( (user,done)=>{
        done(null, user._id);
    })

    passport.deserializeUser((id, done)=>{
        try{
            Db.findById(id).then(user=>{
                done(null, user)
            })    

        }
        catch(err){
            return done (err, null)
        }   
    }) 
    passport.use( new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },(username,password, done)=>{
        
        Db.findUser(username).then(user=>{
            console.log(user);
          
            if(!user) return (done(null,false))
            if(user.password !== password){
                    console.log('aqui')
                    return (done(null, false))
                }
           
            return (done(null,user))
        
        }).catch(err=>{
            console.log(err)
            done(err,false)
        })
        
    }))
}


