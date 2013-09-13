/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');

var ClientCard = require('../gameclient/models/card');
var ClientGame = require('../gameclient/models/game');



var playerLocationMap = {
    hero: 'hero',
    heroPower: 'heroPower',
    weapon: 'weapon',
    secrets: 'secrets',
    hand: 'hand',
    battlefield: 'battlefield'
};

var opponentLocationMap = {
    hero: 'opponentHero',
    heroPower: 'opponentHeroPower',
    weapon: 'opponentWeapon',
    battlefield: 'opponentBattlefield'
};

var publicLocationMap = {
    playedCard: 'playedCard',
    spawningCards: 'spawningCards',
    killedCard: 'killedCard'
};



var Connector = function(gmPlayer) {
    this._gmPlayer = gmPlayer;

    this._gcGame = new ClientGame();

    this._cardSetByGmCardCid = {};
    this._cardSetByGcCardCid = {};

    this._setupGameBinding();
};



_.extend(Connector.prototype, {

    _gmPlayer: null,

    _gcGame: null,

    getGmPlayer: function() {
        return this._gmPlayer;
    },

    getGcGame: function() {
        return this._gcGame;
    },
    
    _getOrCreateGcCard: function(gmCard) {
        if (!gmCard) {
            return gmCard;
        }

        var gmCardCid = gmCard.cid;

        var cardSet = this._cardSetByGmCardCid [gmCardCid];
        if (!cardSet) {
            cardSet = this._cardSetByGmCardCid [gmCardCid] = {};

            var gcCard = new ClientCard({
                game: this._gcGame
            });

            this._setupCardBinding(gmCard, gcCard);

            cardSet.gmCard = gmCard;
            cardSet.gcCard = gcCard;

            this._cardSetByGcCardCid [gcCard.cid] = cardSet;
        }

        if (cardSet.gmCard !== gmCard) {
            throw new Error('Invalid GM card CID');
        }

        return cardSet.gcCard;
    },

    _getGmCard: function(gcCard) {
        if (!gcCard) {
            return gcCard;
        }

        var gcCardCid = gcCard.cid;

        var cardSet = this._cardSetByGcCardCid [gcCardCid];
        if (!cardSet) {
            throw new Error('Unknown GC card CID');
        } else if (cardSet.gcCard !== gcCard) {
            throw new Error('Invalid GC card CID');
        }

        return cardSet.gmCard;
    },

    _setupGameBinding: function() {
        var _this = this;

        var gmPlayer = this._gmPlayer;
        var gmGame = gmPlayer.getGame();
        var gmOpponent = gmPlayer.getOpponent();

        var gcGame = this._gcGame;

        var filterCard = function(gmCard) {
            return _this._getOrCreateGcCard(gmCard);
        };

        this._setupPropertyBindings(gmPlayer.getAccount(), gcGame, {
            'accountName': 'accountName'
        });

        this._setupPropertyBindings(gmPlayer, gcGame, {
            'maxMana': 'maxMana',
            'currentMana': 'currentMana',
            'currentArmor': 'currentArmor',
            'spellPower': 'spellPower',
        });

        this._setupPropertyBindings(gmPlayer, gcGame, filterCard, {
            'hero': 'hero',
            'heroPower': 'heroPower',
            'weapon': 'weapon',
        });

        this._setupCollectionBindings(gmPlayer, gcGame, filterCard, {
            'secrets': 'secrets',
            'hand': 'hand',
            'battlefield': 'battlefield'
        });

        this._setupCollectionLengthBindings(gmPlayer, gcGame, {
            'drawPileCardCount': 'drawPile'
        });

        this._setupPropertyBindings(gmOpponent.getAccount(), gcGame, {
            'opponentAccountName': 'accountName'
        });

        this._setupPropertyBindings(gmOpponent, gcGame, {
            'opponentMaxMana': 'maxMana',
            'opponentCurrentMana': 'currentMana',
            'opponentCurrentArmor': 'currentArmor',
            'opponentSpellPower': 'spellPower',
        });

        this._setupPropertyBindings(gmOpponent, gcGame, filterCard, {
            'opponentHero': 'hero',
            'opponentHeroPower': 'heroPower',
            'opponentWeapon': 'weapon'
        });

        this._setupCollectionBindings(gmOpponent, gcGame, filterCard, {
            'opponentBattlefield': 'battlefield'
        });

        this._setupCollectionLengthBindings(gmOpponent, gcGame, {
            'opponentSecretCount': 'secrets',
            'opponentDrawPileCardCount': 'drawPile',
            'opponentHandCardCount': 'hand'
        });

        gmGame.on('didStartTurn', this._didStartTurn, this);
        gmGame.on('didPlayCard', this._didPlayCard, this);
        gmPlayer.on('!requestCardChoice', this._requestCardChoice, this);

        gcGame.on('!endTurn', this._endTurn, this);
    },

    _setupCardBinding: function(gmCard, gcCard) {
        var _this = this;

        var filterOwner = function(gmOwner) {
            var result;
            if (gmOwner === _this._gmPlayer) {
                result = 'player';
            } else {
                result = 'opponent';
            }
            return result;
        };

        var updateLocationBinding = function() {
            var gmCardOwner = gmCard.getOwner();
            var gmCardLocation = gmCard.getLocation();

            var location;
            if (gmCardOwner === _this._gmPlayer) {
                location = playerLocationMap [gmCardLocation];
            } else {
                location = opponentLocationMap [gmCardLocation];
            }
            if (!location) {
                location = publicLocationMap [gmCardLocation];
            }
            if (!location) {
                location = 'unknown';
            }
            // var isVisible = ((location !== 'unknown') && (location !== 'hand'));

            gcCard.set('location', location);
            // clientCard.set('isVisible', isVisible);
        };

        this._setupPropertyBindings(gmCard, gcCard, filterOwner, {
            'owner': 'owner'
        });

        this._setupPropertyBindings(gmCard, gcCard, {
            'baseCost': 'baseCost',
            'currentCost': 'currentCost',
            'baseAttack': 'baseAttack',
            'currentAttack': 'currentAttack',
            'baseHealth': 'baseHealth',
            'maxHealth': 'maxHealth',
            'damage': 'damage',
            'currentHealth': 'currentHealth',
            'id': 'id',
            'name': 'name',
            'type': 'type',
            'description': 'description',
            'class': 'class',
            'set': 'set',
            'faction': 'faction',
            'rarity': 'rarity',
            'race': 'race',
            'isToken': 'isToken',
            'isAsleep': 'isAsleep',
            'isDiscarded': 'isDiscarded',
            'isFrozen': 'isFrozen',
            'isImmune': 'isImmune',
            'isSilenced': 'isSilenced',
            'hasCharge': 'hasCharge',
            'hasDeathrattle': 'hasDeathrattle',
            'hasDivineShield': 'hasDivineShield',
            'hasEffectTrigger': 'hasEffectTrigger',
            'hasStealth': 'hasStealth',
            'hasTaunt': 'hasTaunt',
            'hasWindfury': 'hasWindfury'
        });

        gmCard.on('change:owner', updateLocationBinding, this);
        gmCard.on('change:location', updateLocationBinding, this);
        updateLocationBinding();

        gcCard.on('!play', function(gcInfo, callback) {
            return this._playCard(gcCard, gcInfo, callback);
        }, this);
    },

    _didStartTurn: function(gmInfo) {
        var playersTurn = gmInfo.player === this._gmPlayer;

        var gcInfo = {
            playersTurn: playersTurn,
            opponentsTurn: !playersTurn,
        };

        this._gcGame.trigger('didStartTurn', gcInfo);
    },

    _didPlayCard: function(gmInfo) {
        var playersCard = gmInfo.player === this._gmPlayer;

        var gcInfo = {
            playersCard: playersCard,
            opponentsCard: !playersCard,
            card: this._getOrCreateGcCard(gmInfo.card),
            location: gmInfo.location,
            cost: gmInfo.cost,
            targetCard: this._getOrCreateGcCard(gmInfo.targetCard),
            targetLocation: gmInfo.targetLocation
        };

        this._gcGame.trigger('didPlayCard', gcInfo);
    },

    _requestCardChoice: function(gmCards, minCount, maxCount, reason, callback) {
        var _this = this;

        var gcCards = gmCards.map(function(gmCard) {
            return _this._getOrCreateGcCard(gmCard);
        });

        var didChooseCards = function(gcChoice) {
            var gmChoice = gcChoice.map(function(gcCard) {
                return _this._getGmCard(gcCard);
            });

            callback(gmChoice);
        };

        this._gcGame.trigger('!requestCardChoice', gcCards, minCount, maxCount, reason, didChooseCards);
    },

    _endTurn: function() {
        this._gmPlayer.endTurn();
    },

    _playCard: function(gcSource, gcInfo, callback) {
        var gcTarget = gcInfo.target;

        var gmSource = this._getGmCard(gcSource);
        var gmTarget = this._getGmCard(gcTarget);

        var gmInfo = {
            chooseOneIndex: gcInfo.chooseOneIndex,
            target: gmTarget,
            battlefieldIndex: gcInfo.battlefieldIndex
        };

        gmSource.play(gmInfo);

        if (callback) {
            callback();
        }
    },

    _setupPropertyBindings: function(source, target, filter, properties) {
        if (!_.isFunction(filter)) {
            properties = filter;
            filter = null;
        }

        _.forEach(properties, function(sourceKey, targetKey) {
            var updateBinding = function() {
                var value = source.get(sourceKey);
                if (filter) {
                    value = filter(value);
                }
                target.set(targetKey, value);
            };

            source.on('change:' + sourceKey, updateBinding);

            updateBinding();
        });
    },

    _setupCollectionBindings: function(source, target, filter, properties) {
        if (!_.isFunction(filter)) {
            properties = filter;
            filter = null;
        }
        
        var notSupported = function() {
            throw new Error('Currently not able to handle collection substitution');
        };

        _.forEach(properties, function(sourceKey, targetKey) {
            source.on('change:' + sourceKey, notSupported);
            target.on('change:' + targetKey, notSupported);

            var sourceCollection = source.get(sourceKey);
            var targetCollection = target.get(targetKey);

            var updateBinding = function() {
                var values = [];
                for (var i = 0, n = sourceCollection.length; i < n; i++) {
                    var value = sourceCollection.at(i);
                    if (filter) {
                        value = filter(value);
                    }
                    values.push(value);
                }
                targetCollection.reset(values);
            };

            sourceCollection.on('all', updateBinding);

            updateBinding();
        });
    },

    _setupCollectionLengthBindings: function(source, target, properties) {
        var notSupported = function() {
            throw new Error('Currently not able to handle collection substitution');
        };

        _.forEach(properties, function(sourceKey, targetKey) {
            source.on('change:' + sourceKey, notSupported);

            var sourceCollection = source.get(sourceKey);

            var updateBinding = function() {
                var value = sourceCollection.length;
                target.set(targetKey, value);
            };

            sourceCollection.on('all', updateBinding);

            updateBinding();
        });
    }

});



module.exports = Connector;
