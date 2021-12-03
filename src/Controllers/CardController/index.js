const connectToDatabase = require('../../Services/ConnectToDatabase')
const getBaseDeckIds = require("../../Services/GetBaseDeckIds");
const idProcessor = require("../../Services/IdProcessor");
const ObjectId = require('mongodb').ObjectId

async function displayInitialDeck(req, res){
    const processedArray = idProcessor(getBaseDeckIds())
    const db = await connectToDatabase('cardGame')
    const collection = db.collection('baseSet')
    const deck = await collection.find({_id: {$in: processedArray}}).toArray()
    res.json(deck)
}

async function displayMagicMan(req,res){
    const magicManId = ObjectId('61aa2c504b4d2d7ae4202286')
    const db = await connectToDatabase('cardGame')
    const collection = db.collection('baseSet')
    const deck = await collection.findOne({_id: magicManId})
    res.json(deck)
}

module.exports.displayInitialDeck = displayInitialDeck
module.exports.displayMagicMan = displayMagicMan