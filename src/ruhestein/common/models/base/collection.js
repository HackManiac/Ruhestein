/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Chaplin = require('chaplin');


var Model = require('./model');



var Collection = Chaplin.Collection.extend({

    model: Model

});



module.exports = Collection;
