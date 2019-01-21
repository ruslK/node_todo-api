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

  mongoDB.findOneAndUpdate(
    {
      _id: new ObjectID('5c30d99727eb46b734b09487')
    },
    {
      $set:
      {
        age: 5
      }
    },
    {
      returnOriginal: false
    })
    .then((result) => {
      console.log(result)
    })

    mongoDB.findOneAndUpdate(
      {
        _id: new ObjectID('5c30d99727eb46b734b09487')
      },
      {
        $inc:
        {
          age: 8, 'metrics.orders' : 2
        }
      },
      {
        returnOriginal: false
      })
      .then((result) => {
        console.log(result)
      })


  console.log('Connection established ')

  client.close();
});
