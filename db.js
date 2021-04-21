const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://adm@admin:chari@myind.vcufe.mongodb.net/MyInd?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});




module.exports = { client }


/*
const mongoClient = require("mongodb").MongoClient

mongoClient.connect("mongodb+srv://adm:<password>@myind.vcufe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true })
    .then(connection => {
            if (error) return console.log(error);
            global.connection = connection.db("myIndustry");
            console.log("connected!!");
        }

    )
    .catch(error => { console.log(error) })

function findSomething() {
    return global.connection
        .collection("something")
        .find({})
        .toArray
}

module.exports = { findSomething }


/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://adm:<password>@myind.vcufe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/