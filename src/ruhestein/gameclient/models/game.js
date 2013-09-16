/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');


var Model = require('./base/model');
var Collection = require('./base/collection');

var CommonPlayerMixin = require('../../common/models/mixins/player');



var Game = Model.extend({

    defaults: function() {
        return {

            accountName: null,

            maxMana: 0,

            currentMana: 0,

            currentArmor: 0,

            spellPower: 0,

            hero: null,

            heroPower: null,

            weapon: null,

            secrets: new Collection(),

            drawPileCardCount: 0,

            hand: new Collection(),

            battlefield: new Collection(),

            opponentAccountName: null,

            opponentMaxMana: 0,

            opponentCurrentMana: 0,

            opponentCurrentArmor: 0,

            opponentSpellPower: 0,

            opponentHero: null,

            opponentHeroPower: null,

            opponentWeapon: null,

            opponentSecretCount: 0,

            opponentDrawPileCardCount: 0,

            opponentHandCardCount: 0,

            opponentBattlefield: new Collection()
            
        };
    },

    getAccountName: function() {
        return this.get('accountName');
    },

    getMaxMana: function() {
        return this.get('maxMana');
    },

    getCurrentMana: function() {
        return this.get('currentMana');
    },

    getCurrentArmor: function() {
        return this.get('currentArmor');
    },

    getSpellPower: function() {
        return this.get('spellPower');
    },

    getHero: function() {
        return this.get('hero');
    },

    getHeroPower: function() {
        return this.get('heroPower');
    },

    getWeapon: function() {
        return this.get('weapon');
    },

    getSecretCount: function() {
        return this.get('secrets').length;
    },

    getSecret: function(index) {
        return this.get('secrets').at(index);
    },

    getDrawPileCardCount: function() {
        return this.get('drawPileCardCount');
    },

    getHandCardCount: function() {
        return this.get('hand').length;
    },

    getHandCard: function(index) {
        return this.get('hand').at(index);
    },

    getBattlefieldCardCount: function() {
        return this.get('battlefield').length;
    },

    getBattlefieldCard: function(index) {
        return this.get('battlefield').at(index);
    },

    getOpponentAccountName: function() {
        return this.get('opponentAccountName');
    },

    getOpponentMaxMana: function() {
        return this.get('opponentMaxMana');
    },

    getOpponentCurrentMana: function() {
        return this.get('opponentCurrentMana');
    },

    getOpponentCurrentArmor: function() {
        return this.get('opponentCurrentArmor');
    },

    getOpponentSpellPower: function() {
        return this.get('opponentSpellPower');
    },
    
    getOpponentHero: function() {
        return this.get('opponentHero');
    },

    getOpponentHeroPower: function() {
        return this.get('opponentHeroPower');
    },

    getOpponentWeapon: function() {
        return this.get('opponentWeapon');
    },

    getOpponentSecretCount: function() {
        return this.get('opponentSecretCount');
    },

    getOpponentDrawPileCardCount: function() {
        return this.get('opponentDrawPileCardCount');
    },

    getOpponentHandCardCount: function() {
        return this.get('opponentHandCardCount');
    },

    getOpponentBattlefieldCardCount: function() {
        return this.get('opponentBattlefield').length;
    },

    getOpponentBattlefieldCard: function(index) {
        return this.get('opponentBattlefield').at(index);
    },

    endTurn: function() {
        this.trigger('!endTurn');
    },

    concede: function(reason) {
        this.trigger('!concede', reason);
    }

});

_.extend(Game.prototype, CommonPlayerMixin);



module.exports = Game;
