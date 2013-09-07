/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var utils = require('./lib/utils');

var Model = require('./models/base/model');
var Collection = require('./models/base/collection');

var CardMixin = require('./models/mixins/card');
var PlayerMixin = require('./models/mixins/player');



var common = {

    utils: utils,
    
    Model: Model,
    Collection: Collection,

    CardMixin: CardMixin,
    PlayerMixin: PlayerMixin,

};



module.exports = common;
