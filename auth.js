const bcrypt = require('bcryptjs')
const LocalStrategy = require('passport-local').Strategy
//bcrypt.hashSync()
const users = [{
    _id: 1,
    username: 'adm',
    password: '123',
    email: 'mazarem91@gmail.com'
}]


module.exports = function (passport){

    function findUser(username){
        return users.find(item => item.username === username)
    }


    function findUserById(id){
        return users.find( item => item._id === id)
    }

    passport.serializeUser( (user,done)=>{
        done(null, user._id);
    })

    passport.deserializeUser((id, done)=>{
        try{
            const user = findUserById(id)
            done(null, user)

        }
        catch(err){
            console.log(err);
            return done (err, null)
        }
    }) 

    passport.use( new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    (username,password, done)=>{
            try{
                const user = findUser(username);
               
                if(!user) return done(null,false)

                if(user.password !== password){
                    console.log('aqui')
                    return done(null, false)
                }
                console.log(user)
                return done(null,user)
            }catch(err){
                console.log(err)
                done(err,false)
            }
    }))


}