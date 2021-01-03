var Datastore = require('nedb')
class DbControl{
    constructor(){
        this._db = new Datastore ({
            filename: './database/ind.db',
            autoload:true
                
        });
       
       
    }

    findUser(paramUser){
        return new Promise((s,f)=>{
            this._db.loadDatabase()
            this._db.findOne({username:paramUser},(err,user)=>{
                    console.log(user);
                    if(err){
                        f(err);
                    }
                    else{
                        s(user)
                    }
                })
        })
    }
    findById(paramId){
        return new Promise((s,f)=>{
            this._db.loadDatabase()
            this._db.findOne({_id:paramId},(err,user)=>{
            console.log(user);
            if(err){
                console.log(`error ${err}`)
                f( err)
            }   else{
                s(user)
            }
            })
        })
    }
    insertUser(userParam){
        
        return new Promise((s,f)=>{
            this._db.insert(userParam,err=>{
                if(err){
                    console.log(`error ${err}`)
                    f(err)
                      
                }
                else{
                  s()
                }
            })
        })

    }

    atualizaUser(userAtualiza,paramAtualiza){

        db.update({username:userAtualiza},{$set:{orders: paramAtualiza}}, err=>{
            if(err){
              console.log(err)
            
            }else{
              console.log(req.body, 'ok')
              Object.assign(req.user,req.body)
            
            }
          });

    }
   

    
}

module.exports = DbControl