/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');


var Model = require('./base/model');

var CommonCardMixin = require('../../common/models/mixins/card');



var Card = Model.extend({

    defaults: function() {
        return {

            /*
             * May be a Player or Account instance.
             */
            owner: null,

            cardData: null,

            baseCost: 0,

            baseAttack: 0,

            baseHealth: 0,

            id: null,

            name: null,

            type: null,

            description: null,

            'class': null,

            set: null,

            faction: null,

            rarity: null,

            race: null,

            isToken: false,

        };
    },

    getOwner: function() {
        return this.get('owner');
    },

    getCardData: function() {
        return this.get('cardData');
    },

    getBaseCost: function() {
        return this.get('baseCost');
    },

    getBaseAttack: function() {
        return this.get('baseAttack');
    },

    getBaseHealth: function() {
        return this.get('baseHealth');
    },

    getId: function() {
        return this.get('id');
    },

    getName: function() {
        return this.get('name');
    },

    getType: function() {
        return this.get('type');
    },

    getDescription: function() {
        return this.get('description');
    },

    getClass: function() {
        return this.get('class');
    },

    getSet: function() {
        return this.get('set');
    },

    getFaction: function() {
        return this.get('faction');
    },

    getRarity: function() {
        return this.get('rarity');
    },

    getRace: function() {
        return this.get('race');
    },

    isToken: function() {
        return this.get('isToken');
    },

});

_.extend(Card.prototype, CommonCardMixin);



module.exports = Card;
