/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');


var utils = require('../../common/lib/utils');

var PlayerMixin = require('../../common/models/mixins/player');

var Model = require('./base/model');
var Collection = require('./base/collection');

var Database = require('../database/database');



/*
 * A Player is somebody who participates in a Game. A Player is identified by his/her
 * Account.
 */
var Player = Model.extend({

    _database: null,

    defaults: function() {
        return {

            account: null,

            game: null,

            baseMana: 0,

            maxMana: 0,

            overloadMana: 0,

            currentMana: 0,

            currentArmor: 0,

            fatiqueDamage: 0,

            spellPower: 0,

            hero: null,

            heroPower: null,

            weapon: null,

            secrets: new Collection(),

            drawPile: new Collection(),

            hand: new Collection(),

            battlefield: new Collection(),

            discardPile: new Collection()

        };
    },

    initialize: function() {
        var _this = this;

        Database.mixin(this, this.getGame());

        var hero = null, weapon = null, attack = 0;

        var updateHeroStats = function() {
            var newHero = _this.getHero(), newWeapon, modifier;
            if (_this.getGame().getCurrentPlayer() === _this) {
                newWeapon = _this.getWeapon();
            } else {
                newWeapon = null;
            }

            if (weapon !== newWeapon) {
                if (weapon) {
                    weapon.off('change:currentAttack', updateHeroStats);
                }
                if (newWeapon) {
                    newWeapon.on('change:currentAttack', updateHeroStats);
                }
            }

            if (hero !== newHero) {
                if (hero && weapon) {
                    hero.modifyCurrentAttack(-weapon.getCurrentAttack());
                }
                if (newHero && newWeapon) {
                    newHero.modifyCurrentAttack(-newWeapon.getCurrentAttack());
                }
            } else {
                modifier = 0;
                if (weapon === newWeapon) {
                    modifier = -attack;
                } else if (weapon) {
                    modifier -= weapon.getCurrentAttack();
                }
                if (newWeapon) {
                    modifier += newWeapon.getCurrentAttack();
                }
                if (modifier !== 0) {
                    hero.modifyCurrentAttack(modifier);
                }
            }

            hero = newHero;
            weapon = newWeapon;
            attack = newWeapon ? newWeapon.getCurrentAttack() : 0;
        };

        this.on('change:hero', function() {
            updateHeroStats();
        });

        this.on('change:weapon', function() {
            updateHeroStats();
        });

        this.on('change:game', function() {
            throw new Error('Substituting game not allowed');
        });

        this.getGame().on('didStartTurn', function() {
            updateHeroStats();
        });

        updateHeroStats();
    },

    getDatabase: function() {
        return this._database;
    },
    
    getAccount: function() {
        return this.get('account');
    },

    getGame: function() {
        return this.get('game');
    },

    getBaseMana: function() {
        return this.get('baseMana');
    },

    setBaseMana: function(baseMana) {
        this.set('baseMana', utils.cap(baseMana, 0, 10));
    },

    modifyBaseMana: function(delta) {
        var baseMana = this.getBaseMana();
        this.setBaseMana(baseMana + delta);
    },

    getMaxMana: function() {
        return this.get('maxMana');
    },

    setMaxMana: function(maxMana) {
        this.set('maxMana', utils.cap(maxMana, 0, 10));
    },

    modifyMaxMana: function(delta) {
        var maxMana = this.getMaxMana();
        this.setMaxMana(maxMana + delta);
    },

    getOverloadMana: function() {
        return this.get('overloadMana');
    },

    setOverloadMana: function(overloadMana) {
        this.set('overloadMana', utils.cap(overloadMana, 0, 10));
    },

    modifyOverloadMana: function(delta) {
        var overloadMana = this.getOverloadMana();
        this.setOverloadMana(overloadMana + delta);
    },

    getCurrentMana: function() {
        return this.get('currentMana');
    },

    setCurrentMana: function(currentMana) {
        this.set('currentMana', utils.cap(currentMana, 0, this.getMaxMana()));
    },

    modifyCurrentMana: function(delta) {
        var currentMana = this.getCurrentMana();
        this.setCurrentMana(currentMana + delta);
    },

    getCurrentArmor: function() {
        return this.get('currentArmor');
    },

    setCurrentArmor: function(currentArmor) {
        this.set('currentArmor', utils.cap(currentArmor, 0, 1000));
    },

    modifyCurrentArmor: function(delta) {
        var currentArmor = this.getCurrentArmor();
        this.setCurrentArmor(currentArmor + delta);
    },

    getFatigueDamage: function() {
        return this.get('fatigueDamage');
    },

    setFatigueDamage: function(fatigueDamage) {
        this.set('fatigueDamage', fatigueDamage);
    },

    modifyFatigueDamage: function(delta) {
        var fatigueDamage = this.getFatigueDamage();
        this.setFatigueDamage(fatigueDamage + delta);
    },

    getSpellPower: function() {
        return this.get('spellPower');
    },

    setSpellPower: function(spellPower) {
        this.set('spellPower', spellPower);
    },

    modifySpellPower: function(delta) {
        var spellPower = this.getSpellPower();
        this.setSpellPower(spellPower + delta);
    },

    getHero: function() {
        return this.get('hero');
    },

    setHero: function(hero) {
        this.set('hero', hero);
    },

    getHeroPower: function() {
        return this.get('heroPower');
    },

    setHeroPower: function(heroPower) {
        this.set('heroPower', heroPower);
    },

    getWeapon: function() {
        return this.get('weapon');
    },

    setWeapon: function(weapon) {
        this.set('weapon', weapon);
    },

    getSecrets: function() {
        return this.get('secrets');
    },

    getDrawPile: function() {
        return this.get('drawPile');
    },

    getHand: function() {
        return this.get('hand');
    },

    getBattlefield: function() {
        return this.get('battlefield');
    },

    getDiscardPile: function() {
        return this.get('discardPile');
    },

    getOpponent: function() {
        return this.getGame().getOpponent(this);
    },

    getOpponentHero: function() {
        return this.getOpponent().getHero();
    },

    getOpponentHeroPower: function() {
        return this.getOpponent().getHeroPower();
    },

    getOpponentWeapon: function() {
        return this.getOpponent().getWeapon();
    },

    getOpponentBattlefield: function() {
        return this.getOpponent().getBattlefield();
    },

    getAccountName: function() {
        return this.getAccount().getAccountName();
    },

    shuffleDrawPile: function() {
        var drawPile = this.getDrawPile();

        var newOrder = this.getGame().randomShuffleOrder(drawPile.length);

        var cards = [], newOrderByCid = {}, i, n;
        for (i = 0, n = drawPile.length; i < n; i++) {
            var card = drawPile.at(i);
            cards.push(card);
            newOrderByCid [card.cid] = newOrder [i];
        }

        cards.sort(function(left, right) {
            var leftOrder = newOrderByCid [left.cid];
            var rightOrder = newOrderByCid [right.cid];
            return leftOrder - rightOrder;
        });

        drawPile.reset(cards);
    },

    drawCard: function(index) {
        if (index === undefined) {
            index = 0;
        }

        var drawPile = this.getDrawPile();
        if (index < drawPile.length) {
            var card = drawPile.at(index);

            if (this.getHand().length < 10) {
                card.moveTo('hand');
            } else {
                card.moveTo('discardPile');
            }

            this.getGame().trigger('didDrawCard', {
                player: this
            });
        } else {
            var fatigueDamage = this.getFatigueDamage() + 1;
            this.setFatigueDamage(fatigueDamage);

            this.getHero().dealDamage(fatigueDamage, 'Fatigue');
        }
    },

    drawCards: function(count) {
        for (var i = 0; i < count; i++) {
            this.drawCard();
        }
    },

    drawRandomCardsByFilter: function(count, filter) {
        var drawPile = this.getDrawPile();

        var candidates = drawPile.filter(function(card) {
            return _.some(card.attributes, filter);
        });

        for (var i = 0; i < count; i++) {
            var index = this.getGame().roll(candidates.length) - 1;

            if (index >= 0) {
                var card = candidates.splice(index, 1) [0];

                var deckIndex = drawPile.indexOf(card);

                this.drawCard(deckIndex);
            }
        }
    },

    requestCardChoice: function(cards, minCount, maxCount, reason, callback) {
        this.trigger('!requestCardChoice', cards, minCount, maxCount, reason, callback);
    },

    getPlayableCards: function() {
        var _this = this;

        var cards = this.collectCardsByLocation('hand,battlefield', function(card) {
            var result;
            var location = card.getLocation();
            if (location === 'hand') {
                result = (card.getCurrentCost() <= _this.getCurrentMana());
            } else if (location === 'battlefield') {
                result = (card.getCurrentAttacksThisTurn() < card.getMaxAttacksThisTurn());
            } else {
                throw new Error('Unexpected location "' + location + '"');
            }
        });

        return cards;
    },

    endTurn: function() {
        return this.getGame().endTurn(this);
    }

});

_.extend(Player.prototype, PlayerMixin);



module.exports = Player;
