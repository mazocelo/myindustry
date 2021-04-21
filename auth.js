//const bcrypt = require('bcryptjs')
const LocalStrategy = require('passport-local').Strategy
    //bcrypt.hashSync()
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://adm:chari@myind.vcufe.mongodb.net/MyInd?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = function(passport) {

    passport.serializeUser((user, done) => {
        console.log(user)
        done(null, user._id);
    })

    passport.deserializeUser((id, done) => {
        try {

            console.log(id)
            done(null, id)

            /* client.connect(err => {
                const collection = client.db("myInd").collection("users");
                collection.findOne({ "id": id })
                //client.close();
            });          
            */
        } catch (err) {
            console.log(err)
            return done(err, null)
        }
    })
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, (username, password, done) => {

        // var user;
        client.connect(err => {
            const collection = client.db("myInd").collection("users");
            collection.findOne({ "username": username, "password": password }).then(user => {
                    if (err) {
                        console.log(err)
                        done(err, false)
                    }
                    if (!user) return (done(null, false))
                    if (user.password !== password) {
                        console.log('aqui')
                        return (done(null, false))
                    }

                    return (done(null, user))

                })
                //client.close();
        })
    }))
}