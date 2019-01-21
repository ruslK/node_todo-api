// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'NodeCourseDB';
// Connect using MongoClient
MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }

  const mongoDB = client.db('NodeCourseDB').collection('Users');

  console.log('Connected to MongoDB server');

  // mongoDB.deleteOne({name: 'Ruslan'}).then((result) => {
  //   console.log(result);
  // });
//
  mongoDB.findOneAndDelete({name: 'Ruslan'}).then((result) => {
    console.log(result);
  })


  console.log('Connection established ')

  client.close();
});
