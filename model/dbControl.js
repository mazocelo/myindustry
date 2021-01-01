///DAO futuro refatoramento

var Datastore = require('nedb')

class dbControl{
    constructor(){
        this.db = new NeDB ({
            filename: 'industrias.db',
            autoload:true
                
        });
        this.db.loadDatabase
    }
}