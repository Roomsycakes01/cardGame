const ObjectId = require('mongodb').ObjectId

function idProcessor(idArray){
    return idArray.map((id)=>ObjectId(id))
}

module.exports = idProcessor