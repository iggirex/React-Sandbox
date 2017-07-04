var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// "Blog will be Database name"
var url = 'mongodb://localhost:27017/Blog';

// To access DB 1) start MongoDB Shell with Brew
// 2) open "mongo" from cli
// 3) List all DBs "show dbs" Switch Dbs "use <DB name>" show collections "show collections"
// 4) Find specific collection "db.<DB name>.find()"
module.exports = {
  signup: function(name, email, password){
    MongoClient.connect(url, function(err, db){
      console.log("inside MongClient.connect")
      db.collection('user').insertOne({
        "name": name,
        "email": email,
        "password": password
      }, function(err, result){
        assert.equal(err, null);
        console.log("Saved the user sign up details.");
      });
    });
  }
}
