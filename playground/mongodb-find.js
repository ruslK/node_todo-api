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

  const mongoDB = client.db('NodeCourseDB').collection('Todos');

  console.log('Connected to MongoDB server');

  mongoDB

  mongoDB
    .find({
      _id: new ObjectID('5c30d932e2f7eab67e332c9b')
    })
    .toArray().then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
      console.log('Unable to fetch todos', err);
    });



  mongoDB
    .find({
      _id: new ObjectID('5c30d932e2f7eab67e332c9b')
    })
    .count().then((count) => {
      console.log('Counting', count);
    }, (err) => {
      console.log('Unable to fetch todos')
    });

  console.log('Connection established ')

  client.close();
});
