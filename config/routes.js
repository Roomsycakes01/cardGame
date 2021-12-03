const CardController = require('../src/Controllers/CardController')

function routes(app){
    app.get('/initialCards', CardController.displayInitialDeck)

    app.get('/magicMan', CardController.displayMagicMan)
}

module.exports = routes
