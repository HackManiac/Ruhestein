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

            game: null,

            owner: null,

            location: 'unknown',

            baseCost: 0,

            currentCost: 0,

            baseAttack: 0,

            currentAttack: 0,

            baseHealth: 0,

            maxHealth: 0,

            damage: 0,

            currentHealth: 0,

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

            isAsleep: false,

            isDiscarded: false,

            isFrozen: false,

            isImmune: false,

            isSilenced: false,

            hasCharge: false,

            hasDeathrattle: false,

            hasDivineShield: false,

            hasEffectTrigger: false,

            hasStealth: false,

            hasTaunt: false,

            hasWindfury: false,

        };
    },

    getGame: function() {
        return this.get('game');
    },

    getOwner: function() {
        return this.get('owner');
    },

    getLocation: function() {
        return this.get('location');
    },

    getBaseCost: function() {
        return this.get('baseCost');
    },

    getCurrentCost: function() {
        return this.get('currentCost');
    },

    getBaseAttack: function() {
        return this.get('baseAttack');
    },

    getCurrentAttack: function() {
        return this.get('currentAttack');
    },

    getBaseHealth: function() {
        return this.get('baseHealth');
    },

    getMaxHealth: function() {
        return this.get('maxHealth');
    },

    getDamage: function() {
        return this.get('damage');
    },

    getCurrentHealth: function() {
        return this.get('currentHealth');
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

    isAsleep: function() {
        return this.get('isAsleep');
    },

    isDiscarded: function() {
        return this.get('isDiscarded');
    },

    isFrozen: function() {
        return this.get('isFrozen');
    },

    isImmune: function() {
        return this.get('isImmune');
    },

    isSilenced: function() {
        return this.get('isSilenced');
    },

    hasCharge: function() {
        return this.get('hasCharge');
    },
    
    hasDeathrattle: function() {
        return this.get('hasDeathrattle');
    },
    
    hasDivineShield: function() {
        return this.get('hasDivineShield');
    },

    hasEffectTrigger: function() {
        return this.get('hasEffectTrigger');
    },

    hasStealth: function() {
        return this.get('hasStealth');
    },

    hasTaunt: function() {
        return this.get('hasTaunt');
    },

    hasWindfury: function() {
        return this.get('hasWindfury');
    },

    canPlay: function(callback) {
        this.trigger('!canPlay', callback);
    },

    play: function(battlefieldIndex, callback) {
        this.trigger('!play', battlefieldIndex, callback);
    },

    getCurrentArmor: function() {
        return this.getGame().getCurrentArmor();
    }

});

_.extend(Card.prototype, CommonCardMixin);



module.exports = Card;
