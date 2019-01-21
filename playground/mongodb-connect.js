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

  console.log('Connected to MongoDB server');

  // Create a collection we want to drop later
  const col = client.db(dbName).collection('Todos').insertOne({
    _id: new ObjectID(),
    text: 'Some Text for Testing',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unbale to insert data')
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
    return result;
  });

  console.log();

  client.db(dbName).collection('Users').insertOne({
    _id: new ObjectID(),
    name: 'Ruslan',
    age: 33,
    location: 'USA'
  }, (err, result) => {
    if (err) {
      return console.log('Unbale to insert data')
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
    return result;
  })


    console.log('Connection established ')

  client.close();
});
