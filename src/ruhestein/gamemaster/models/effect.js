/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');


// var utils = require('../../common/lib/utils');

var Model = require('./base/model');
var Collection = require('./base/collection');

var Buff = require('./buff');



var Effect = Model.extend({

    basePower: null,

    defaults: function() {
        return {
            card: null,

            effectedCards: new Collection(),

            castedBuffs: new Collection()
        };
    },

    getCard: function() {
        return this.get('card');
    },

    getEffectedCards: function() {
        return this.get('effectedCards');
    },

    getCastedBuffs: function() {
        return this.get('castedBuffs');
    },

    getId: function() {
        throw new Error('getId() must be overriden by sub-class');
    },

    getDescription: function() {
        throw new Error('getDescription() must be overriden by sub-class');
    },

    formatDescription: function() {
        var description = this.getDescription();
        description = description.replace(/\{P\}/, this.getCurrentPower());
        return description;
    },

    getCurrentPower: function() {
        var power = this.basePower;
        if (_.isNumber(power)) {
            power += this.getPlayer().getSpellPower();
        }
        return power;
    },

    getPlayer: function() {
        return this.getCard().getOwner();
    },

    getGame: function() {
        return this.getCard().getGame();
    },

    hasChooseOne: false,

    hasSecret: false,

    targetLocations: null,

    targetFilter: null,

    needsTarget: function(info) {
        var result;
        if (this.hasChooseOne) {
            var choice = this.chooseOne [info.chooseOneIndex];
            result = (choice.target === 'target');
        } else {
            result = (this.targetLocations || this.targetFilter);
        }
        return result;
    },
    
    canCast: true,

    cast: function() {
        if (!this.castBattlecry) {
            throw new Error('(' + this.getId() + '): cast() must be overriden by sub-class');
        }
    },

    uncast: function() {
        // nop
    },

    buffTargetFilter: null,
    
    castBuff: function(target) {
        if (this.buff) {
            _.forEach(this.buff, function(value, key) {
                this._modifyProperty(target, key, value);
            }, this);
        } else {
            throw new Error('(' + this.getId() + '): castBuff() must be overriden by sub-class');
        }
    },

    uncastBuff: function(target) {
        if (this.buff) {
            _.forEach(this.buff, function(value, key) {
                this._modifyProperty(target, key, - value);
            }, this);
        }
    },

    _modifyProperty: function(target, key, delta) {
        var capitalizedKey = key [0].toUpperCase() + key.substring(1), getter, setter;
        if (/^(is|has)/.test(key)) {
            getter = key;
        } else {
            getter = 'get' + capitalizedKey;
        }
        setter = 'set' + capitalizedKey;
        var value = target [getter].call(target);
        target [setter].call(target, value + delta);
    },

    castCommonEffects: function() {
        var target, info;
        if (arguments.length <= 1) {
            target = null;
            info = arguments [0];
        } else {
            target = arguments [0];
            info = arguments [1];
        }

        if (this.castBattlecry) {
            this.listenToGame('didPlayCardFromHand', this._battlecryDidPlayCard);
        }

        if (this.castDeathrattle) {
            this.getCard().setHasDeathrattle(true);

            this.listenToGame('didKillCard', this._deathrattleDidKillCard);
        }

        if (this.castEffectTrigger && this.triggerEffectTrigger) {
            this.getCard().setHasEffectTrigger(true);

            this.listenToGame('didTriggerEffectTrigger', this._effectTriggerDidTriggerEffectTrigger);

            this.castEffectTrigger();
        }

        if (this.castEnrage && this.uncastEnrage) {
            this.listenToCard('change:damage', this._enrageDidChangeDamage);
        }

        if (this.castSecret && this.triggerSecret) {
            this.listenToGame('didTriggerSecret', this._secretDidTriggerSecret);

            this.castSecret();
        }

        if (this.hasChooseOne) {
            var choice = this.chooseOne [info.chooseOneIndex];

            var card = this.createNamedCard(choice.filter);
            card.moveTo('spawningCards');

            if (choice.target === 'none') {
                card.play({});
            } else if (choice.target === 'self') {
                card.play({
                    target: this.getCard()
                });
            } else if (choice.target === 'target') {
                card.play({
                    target: target
                });
            } else {
                throw new Error('Unexpected choose one target "' + choice.target + '"');
            }
        }
    },

    _battlecryDidPlayCard: function(info) {
        if (info.card === this.getCard()) {
            this.stopListeningToGame('didPlayCardFromHand', this._battlecryDidPlayCard);

            if (!this.needsTarget() || info.targetCard) {
                this.castBattlecry(info.targetCard);
            }
        }
    },

    _deathrattleDidKillCard: function(info) {
        if (info.card === this.getCard()) {
            this.stopListeningToGame('didKillCard', this._deathrattleDidKillCard);

            this.castDeathrattle();
        }
    },

    _effectTriggerDidTriggerEffectTrigger: function(info) {
        if (info.card === this.getCard()) {
            this.triggerEffectTrigger(info);
        }
    },

    _enrageDidChangeDamage: function() {
        var card = this.getCard();
        var damage = card.getDamage();
        if (damage > 0) {
            this.castEnrage(card);
        } else {
            this.uncastEnrage(card);
        }
    },

    _secretDidTriggerSecret: function(info) {
        if (info.card === this.getCard()) {
            this.stopListeningToGame('didTriggerSecret', this._secretDidTriggerSecret);

            this.triggerSecret(info);
        }
    },

    uncastCommonEffects: function() {
        this.stopListeningToGame('didPlayCardFromHand', this._battlecryDidPlayCard);
        this.stopListeningToGame('didKillCard', this._deathrattleDidKillCard);
    },

    reset: function() {
        this.uncast();

        var buffs = this.getCastedBuffs().toArray();
        _.forEach(buffs, function(buff) {
            buff.uncast();
        });

        this.stopListening();
        this.getCard().off(null, null, this);
        this.getPlayer().off(null, null, this);
        this.getGame().off(null, null, this);
    },

    listenToGame: function(eventName, handler) {
        this.listenTo(this.getGame(), eventName, handler);
    },

    stopListeningToGame: function(eventName, handler) {
        this.stopListening(this.getGame(), eventName, handler);
    },

    listenToCard: function(eventName, handler) {
        this.listenTo(this.getCard(), eventName, handler);
    },

    stopListeningToCard: function(eventName, handler) {
        this.stopListening(this.getCard(), eventName, handler);
    },

    updateEffectedCards: function(cards, added, removed) {
        var _this = this;

        if (cards === undefined) {
            cards = this.getPlayer().getBattlefield();
        } else if (_.isFunction(cards)) {
            cards = cards.call(this);
        }

        var effectedCards = this.getEffectedCards();

        var removableCards = new Collection();
        effectedCards.forEach(function(card) {
            var index = cards ? cards.indexOf(card) : -1;
            if (index < 0) {
                removableCards.add(card);
            }
        });

        var addableCards = new Collection();
        if (cards) {
            cards.forEach(function(card) {
                if (effectedCards.indexOf(card) < 0) {
                    addableCards.add(card);
                }
            });
        }

        removableCards.forEach(function(card) {
            effectedCards.remove(card);
            removed.call(_this, card);
        });

        addableCards.forEach(function(card) {
            effectedCards.add(card);
            added.call(_this, card);
        });
    },

    getBuffByCard: function(card) {
        return this.getCastedBuffs().find(function(buff) {
            return buff.getCard() === card;
        });
    },

    buffCard: function(card, uncastOnEffectReset) {
        if (uncastOnEffectReset === undefined) {
            uncastOnEffectReset = (this.getCard().isMinion() && !this.castBattlecry);
        }

        var buff = this.getBuffByCard(card);
        if (buff) {
            throw new Error('Cannot create multiple buffs for same card-effect combo');
        }

        buff = new Buff({
            card: card,
            effect: this
        });

        buff.cast(uncastOnEffectReset);

        return buff;
    },

    buffCards: function(getCardsCallback) {
        var _this = this;

        var added = function(card) {
            _this.buffCard(card);
        };

        var removed = function(card) {
            var buff = _this.getBuffByCard(card);

            if (buff) {
                buff.uncast();
            }
        };

        var updateCards = function(cards) {
            if (cards === undefined) {
                cards = getCardsCallback.call(_this);
            }

            _this.updateEffectedCards(cards, added, removed);
        };

        var didMoveCard = function() {
            updateCards();
        };

        var willResetCard = function(info) {
            if (info.card === _this.getCard()) {
                updateCards([]);
            }
        };

        this.listenToGame('didMoveCard', didMoveCard);
        this.listenToGame('willResetCard', willResetCard);
        updateCards();

        return updateCards;
    },

    buffCardsByLocation: function(locations, filter) {
        var getCards = function() {
            return this.collectCardsByLocation(locations, filter);
        };

        return this.buffCards(getCards);
    },

    buffAdjacentCards: function() {
        var getCards = function() {
            return this.collectAdjacentBattlefieldCardsByCard(this.getCard());
        };

        return this.buffCards(getCards);
    },

    getSelfBuff: function() {
        return this.getBuffByCard(this.getCard());
    },

    getSelfBuffStacks: function() {
        var selfBuff = this.getSelfBuff();
        var stacks;
        if (selfBuff) {
            stacks = selfBuff.getStacks();
        } else {
            stacks = 0;
        }
        return stacks;
    },

    setSelfBuffStacks: function(stacks) {
        var selfBuff = this.getSelfBuff();
        if ((stacks <= 0) && selfBuff) {
            selfBuff.uncast();
        } else if (stacks > 0) {
            if (!selfBuff) {
                selfBuff = this.buffCard(this.getCard());
            }
            selfBuff.setStacks(stacks);
        }
    },

    modifySelfBuffStacks: function(delta) {
        this.setSelfBuffStacks(this.getSelfBuffStacks() + delta);
    },


    // player helper methods

    createNamedCard: function(name) {
        var filter = this.cardFilters [name];
        if (filter === undefined) {
            throw new Error('Unknown card filter "' + name + '"');
        }
        return this.getPlayer().createCardFromFilter(filter);
    },

    collectCardsByLocation: function(locations, filter) {
        return this.getPlayer().collectCardsByLocation(locations, filter);
    },

    collectAdjacentBattlefieldCardsByCard: function(indexOrCard) {
        return this.getPlayer().collectAdjacentBattlefieldCardsByCard(indexOrCard);
    },

    getRandomCardByLocation: function(locations, filter) {
        var candidates = this.collectCardsByLocation(locations, filter);

        var index = this.getGame().roll(candidates.length) - 1;

        return candidates.at(index);
    },

    collectTargetCards: function() {
        return this.collectCardsByLocation(this.targetLocations, this.targetFilter);
    },
    

    // card helper methods

    summonCard: function(card, target, bfIndex) {
        card.moveTo('spawningCards');
        card.play({
            target: target,
            battlefieldIndex: bfIndex
        });
    },

    dealDamage: function(damage, card) {
        card.dealDamage(damage, this.getCard());
    },

    healDamage: function(damage, card) {
        card.healDamage(damage, this.getCard());
    },

    killCard: function(card) {
        card.kill(this.getCard());
    },


    // cast helper methods

    castCharge: function(target) {
        if (target === undefined) {
            target = this.getCard();
        }
        target.setHasCharge(true);
        target.setIsAsleep(false);
    },

    castDivineShield: function(target) {
        if (target === undefined) {
            target = this.getCard();
        }
        target.setHasDivineShield(true);
    },

    castStealth: function(target) {
        if (target === undefined) {
            target = this.getCard();
        }
        target.setHasStealth(true);
    },

    castTaunt: function(target) {
        if (target === undefined) {
            target = this.getCard();
        }
        target.setHasTaunt(true);
    },

    castWindfury: function(target) {
        if (target === undefined) {
            target = this.getCard();
        }
        target.setHasWindfury(true);
    },


    // event helper methods

    onStartOfPlayerTurn: function(callback) {
        this.listenToGame('didStartTurn', function(info) {
            if (info.player === this.getPlayer()) {
                callback.call(this, info);
            }
        });
    },

    onEndOfPlayerTurn: function(callback) {
        this.listenToGame('didEndTurn', function(info) {
            if (info.player === this.getPlayer()) {
                callback.call(this, info);
            }
        });
    },

    onStartOfNextPlayerTurn: function(callback) {
        var didStartTurn = function(info) {
            if (info.player === this.getPlayer()) {
                this.stopListeningToGame('didStartTurn', didStartTurn);
                
                callback.call(this, info);
            }
        };

        this.listenToGame('didStartTurn', didStartTurn);
    },

    onEndOfNextPlayerTurn: function(callback) {
        var didEndTurn = function(info) {
            if (info.player === this.getPlayer()) {
                this.stopListeningToGame('didEndTurn', didEndTurn);

                callback.call(this, info);
            }
        };

        this.onEndOfPlayerTurn(didEndTurn);
    },

    uncastOnEndOfTurn: function() {
        this.onEndOfPlayerTurn(function() {
            this.uncast();
        });
    },

    onBattlefieldChange: function(callback) {
        var didMoveCard = function(info) {
            callback.call(this, info);
        };

        this.listenToGame('didMoveCard', didMoveCard);
    }

});



module.exports = Effect;
