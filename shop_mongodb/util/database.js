const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://michaelh:Jordan01@cluster0-kdwgq.mongodb.net/test?retryWrites=true')
  .then(client => {
    console.log("Connected!");
    callback(client);
  })
  .catch(err => console.log(err));
}

module.exports = mongoConnect;