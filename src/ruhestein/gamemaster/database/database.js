/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');


var utils = require('../../common/lib/utils');

var Collection = require('../models/base/collection');

var Deck = require('../models/deck');
var Card = require('../models/card');
var GameCard = require('../models/game-card');
var Effect = require('../models/effect');

var rawDatabase = require('./raw-database');



var cardDataOverride = {
    // insert card data overrides here...
};



var effects = {};
_.forEach(rawDatabase.effects, function(effect) {
    _.extend(effects, effect);
});



var cardDataSet = _.map(rawDatabase.cardDataSet, function(cardData) {
    return _.extend({}, cardData, cardDataOverride [cardData.id]);
});



var addUnique = function(map, key, value) {
    if (_.has(map, key)) {
        map [key] = null;
    } else {
        map [key] = value;
    }
};



var cardDataById = {}, cardDataByHearthpwnId = {}, cardDataByEffectId = {}, nonTokenCardDataByName = {};
_.forEach(cardDataSet, function(cardData) {
    addUnique(cardDataById, cardData.id, cardData);
    addUnique(cardDataByHearthpwnId, cardData.hearthpwnId, cardData);
    addUnique(cardDataByEffectId, cardData.effectId, cardData);
    if (!cardData.isToken) {
        addUnique(nonTokenCardDataByName, cardData.name, cardData);
    }
});



var effectClassById = {};
_.forEach(effects, function(effect, effectId) {
    var cardData = cardDataByEffectId [effectId];

    var EffectClass = Effect.extend(effect);

    var originalCast = EffectClass.prototype.cast;
    var originalUncast = EffectClass.prototype.uncast;

    var wrappedCast, wrappedUncast;
    if (cardData.type !== 'heroPower') {
        wrappedCast = function() {
            if (!this._wasCast) {
                this._wasCast = true;
                this.castCommonEffects.apply(this, arguments);
                originalCast.apply(this, arguments);
            }
        };

        wrappedUncast = function() {
            if (this._wasCast) {
                this._wasCast = false;
                originalUncast.apply(this, arguments);
                this.uncastCommonEffects.apply(this, arguments);
            }
        };
    } else {
        wrappedCast = originalCast;
        wrappedUncast = originalUncast;
    }

    _.extend(EffectClass.prototype, {

        _wasCast: false,

        cast: wrappedCast,

        uncast: wrappedUncast,
        
        hasSecret: (cardData.description.substring(0, 7) === 'Secret:'),

        hasChooseOne: (cardData.description.substring(0, 12) === 'Choose One -'),

        getId: function() {
            return effectId;
        }

    });

    addUnique(effectClassById, effectId, EffectClass);
});



var selectCardDataFromFilter = function(filter) {
    var result;
    if (_.isFunction(filter)) {
        result = _.filter(cardDataSet, filter);
    } else if (_.isObject(filter)) {
        result = _.where(cardDataSet, filter);
    } else {
        throw new Error('Unexpcted filter parameter');
    }
    return result;
};



var mixin = function(owner, game) {
    return _.extend(owner, {

        selectCardDataFromFilter: selectCardDataFromFilter,

        createCardFromCardData: function(cardData) {
            var attributes = {
                owner: owner,
                cardData: cardData,
                baseCost: cardData.cost,
                baseAttack: cardData.attack,
                baseHealth: cardData.health,
                id: cardData.id,
                name: cardData.name,
                type: cardData.type,
                description: cardData.description,
                'class': cardData.class,
                set: cardData.set,
                faction: cardData.faction,
                rarity: cardData.rarity,
                race: cardData.race,
                isToken: cardData.isToken,
            };

            var CardClass;

            if (game) {
                _.extend(attributes, {
                    location: 'created',
                    currentCost: cardData.cost,
                    currentAttack: cardData.attack,
                    maxHealth: cardData.health,
                    currentHealth: cardData.health,
                    damage: 0,
                    currentAttacksThisTurn: 0,
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
                });

                CardClass = GameCard;
            } else {
                CardClass = Card;
            }

            var card = new CardClass(attributes);

            if (CardClass.prototype.getEffects && cardData.effectId) {
                var EffectClass = effectClassById [cardData.effectId];

                var effect = new EffectClass({
                    card: card
                });

                card.getEffects().reset([effect]);
            }

            return card;
        },

        createCardById: function(id) {
            var cardData = cardDataById [id];
            if (!cardData) {
                throw new Error('Unknown card ID "' + id + '"');
            }
            return this.createCardFromCardData(cardData);
        },

        createCardByHearthpwnId: function(hearthpwnId) {
            var cardData = cardDataByHearthpwnId [hearthpwnId];
            if (!cardData) {
                throw new Error('Unknown Hearthpwn card ID "' + hearthpwnId + '"');
            }
            return this.createCardFromCardData(cardData);
        },

        createNonTokenCardByName: function(name) {
            var cardData = nonTokenCardDataByName [name];
            if (!cardData) {
                throw new Error('Unknown non-token card named "' + name + '"');
            }
            return this.createCardFromCardData(cardData);
        },

        createCardFromFilter: function(filter) {
            var candidates = selectCardDataFromFilter(filter);
            if (candidates.length === 0) {
                throw new Error('No card found matching filter');
            } else if (candidates.length > 1) {
                throw new Error('Multiple cards found matching filter');
            }
            return this.createCardFromCardData(candidates [0]);
        },

        createDeckFromHearthpwnDeckbuilderUrl: function(name, url) {
            var md = url.match(/([a-z]+)#([0-9:;]+)/);
            if (!md) {
                throw new Error('Invalid URL');
            }

            var clazz = md [1], deckString = md [2], cards = [];
            _.forEach(deckString.split(';'), function(deckPart) {
                var cardParts = deckPart.split(':');
                var hearthpwnId = cardParts [0], amount = +cardParts [1];
                for (var i = 0; i < amount; i++) {
                    var card = this.createCardByHearthpwnId(hearthpwnId);
                    cards.push(card);
                }
            }, this);

            var deck = new Deck({
                owner: owner,
                name: name,
                'class': utils.variablify(clazz),
                cards: new Collection(cards)
            });

            return deck;
        },

        createDeckFromCockatriceExport: function(name, clazz, cockatriceExport) {
            var lines = cockatriceExport.split(/[\r]?[\n]/);

            var cards = [];
            _.forEach(lines, function(line) {
                var md = line.match(/^([\d]+)[\s]+(.*)$/);
                if (md) {
                    var amount = +md [1];
                    var name = md [2];
                    for (var i = 0; i < amount; i++) {
                        var card = this.createNonTokenCardByName(name);
                        cards.push(card);
                    }
                }
            }, this);

            var deck = new Deck({
                owner: owner,
                name: name,
                'class': utils.variablify(clazz),
                cards: new Collection(cards)
            });

            return deck;
        }

    });
};



var Database = {

    selectCardDataFromFilter: selectCardDataFromFilter,

    mixin: mixin

};



module.exports = Database;
