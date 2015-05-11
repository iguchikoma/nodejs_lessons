var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings');
MongoClient.connect("mongodb://"+settings.host+"/"+settings.db, function(err, db){
  if (err) { return console.dir(err); }
  console.log("connected to db");
  db.collection("users", function(err, collection){
    var docs = [
  {name: "taguchi", score: 40},
    {name: "ti", score: 40},
    {name: "tchi", score: 40}
  ];
  /*
     collection.find({name: "taguchi"}).toArray(function(err, items){
     console.log(items);
     });
     */
  var stream = collection.find().stream();
  stream.on("data", function(item) {
    console.log(item);
  });
  stream.on("end", function(){
    console.log("end");
  });
  });
});

