/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Model = require('./base/model');
var Collection = require('./base/collection');



var Deck = Model.extend({

    defaults: function() {
        return {

            /*
             * May be a Player or Account instance.
             */
            owner: null,

            name: null,

            'class': null,

            cards: new Collection()

        };
    },

    getOwner: function() {
        return this.get('owner');
    },

    getName: function() {
        return this.get('name');
    },

    getClass: function() {
        return this.get('class');
    },

    getCards: function() {
        return this.get('cards');
    }

});



module.exports = Deck;
