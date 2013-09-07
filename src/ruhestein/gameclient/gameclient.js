/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Model = require('./models/base/model');
var Collection = require('./models/base/collection');

var Card = require('./models/card');
var Game = require('./models/game');



var gameClient = {

    Model: Model,
    Collection: Collection,

    Card: Card,
    Game: Game,

};



module.exports = gameClient;
