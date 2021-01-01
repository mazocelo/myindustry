const bcrypt = require('bcryptjs')
const LocalStrategy = require('passport-local').Strategy
//bcrypt.hashSync()
var NeDB = require('nedb')
let db = new NeDB ({
    filename: 'industrias.db',
    autoload:true
});

db.loadDatabase();
module.exports = function (passport){

    /**
    function findUserById(id){
    return users.find( item => item._id === id)
}

     */

    passport.serializeUser( (user,done)=>{
        done(null, user._id);
    })

    passport.deserializeUser((id, done)=>{
        try{
           db.findOne({_id:id},(err, user)=>{
                if(err){
                    ( err) =>{
                        console.log(`error ${err}`);
                    }
                }
                else{
                    done(null, user)
                }
            })
            

        }
        catch(err){
            return done (err, null)
        }
    }) 
    passport.use( new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    (username,password, done)=>{
            try{
                db.loadDatabase();
                db.findOne({username:username},(err, user)=>{
                    if(err){
                        ( err) =>{
                            console.log(`error ${err}`);
                        }
                    }
                    else{
                        //console.log(user);
                        if(!user) return done(null,false)
        
                        if(user.password !== password){
                                console.log('aqui')
                                return done(null, false)
                            }
                        console.log(user)
                        return done(null,user)
                    }
                })
            }catch(err){
                console.log("erro:",err)
                done(err,false)
            }
    }))
}


