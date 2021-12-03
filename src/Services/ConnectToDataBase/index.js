const MongoClient = require("mongodb").MongoClient;

async function connectToDatabase(dbName){
    const mongoConnection = 'mongodb://root:password@localhost:27017'
    const connection = await MongoClient.connect(mongoConnection, {useNewUrlParser: true, useUnifiedTopology: true})
    return connection.db(dbName)
}


module.exports = connectToDatabase