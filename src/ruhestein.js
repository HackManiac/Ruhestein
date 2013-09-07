/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var common = require('./ruhestein/common/common');

var gameMaster = require('./ruhestein/gamemaster/gamemaster');

var gameClient = require('./ruhestein/gameclient/gameclient');

var GameSimulation = require('./ruhestein/gamesimulation/gamesimulation');



var Ruhestein = {

    utils: common.utils,

    common: common,

    gameMaster: gameMaster,

    gameClient: gameClient,

    GameSimulation: GameSimulation,
    
};



module.exports = Ruhestein;
