/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var RawDatabase = require('./database/raw-database');
var Database = require('./database/database');

var Model = require('./models/base/model');
var Collection = require('./models/base/collection');

var Account = require('./models/account');
var Buff = require('./models/buff');
var Card = require('./models/card');
var Deck = require('./models/deck');
var Effect = require('./models/effect');
var GameCard = require('./models/game-card');
var Game = require('./models/game');
var Player = require('./models/player');

var Connector = require('./connector');



var gameMaster = {

    RawDatabase: RawDatabase,
    Database: Database,
    
    Model: Model,
    Collection: Collection,

    Account: Account,
    Buff: Buff,
    Card: Card,
    Deck: Deck,
    Effect: Effect,
    GameCard: GameCard,
    Game: Game,
    Player: Player,

    Connector: Connector,

};



module.exports = gameMaster;
