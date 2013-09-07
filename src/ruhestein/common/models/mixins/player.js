/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');


var Collection = require('../base/collection');



var Player = {

    collectCardsByLocation: function(locations, filter) {
        var _this = this;

        var result = [];

        var pushIfExists = function(card) {
            if (card) {
                result.push(card);
            }
        };

        var pushCollection = function(collectionName) {
            var modelName;
            if (collectionName === 'Secrets') {
                modelName = 'Secret';
            } else {
                modelName = collectionName + 'Card';
            }

            var getCollection = _this ['get' + collectionName];
            var getModelCount = _this ['get' + modelName + 'Count'];
            var getModel = _this ['get' + modelName];

            if (_.isFunction(getCollection)) {
                var collection = getCollection.call(_this);
                collection.forEach(function(card) {
                    pushIfExists(card);
                });
            } else if (_.isFunction(getModelCount) && _.isFunction(getModel)) {
                for (var i = 0, n = getModelCount.call(_this); i < n; i++) {
                    var card = getModel.call(_this, i);
                    pushIfExists(card);
                }
            } else {
                throw new Error('Unknown collection type');
            }
        };

        if (_.isString(locations)) {
            if (locations === 'allCharacters') {
                locations = 'hero,battlefield,opponentHero,opponentBattlefield';
            } else if (locations === 'allBattlefields') {
                locations = 'battlefield,opponentBattlefield';
            } else if (locations === 'characters') {
                locations = 'hero,battlefield';
            } else if (locations === 'opponentCharacters') {
                locations = 'opponentHero,opponentBattlefield';
            }

            locations = locations.split(',');
        }

        for (var i = 0, n = locations.length; i < n; i++) {
            var location = locations [i];

            if (location === 'hero') {
                pushIfExists(this.getHero());
            } else if (location === 'heroPower') {
                pushIfExists(this.getHeroPower());
            } else if (location === 'weapon') {
                pushIfExists(this.getWeapon());
            } else if (location === 'secrets') {
                pushCollection('Secrets');
            } else if (location === 'hand') {
                pushCollection('Hand');
            } else if (location === 'battlefield') {
                pushCollection('Battlefield');
            } else if (location === 'opponentHero') {
                pushIfExists(this.getOpponentHero());
            } else if (location === 'opponentHeroPower') {
                pushIfExists(this.getOpponentHeroPower());
            } else if (location === 'opponentWeapon') {
                pushIfExists(this.getOpponentWeapon());
            } else if (location === 'opponentBattlefield') {
                pushCollection('OpponentBattlefield');
            } else {
                throw new Error('Unknown card location "' + location + '"');
            }
        }

        if (_.isFunction(filter)) {
            result = _.filter(result, filter);
        } else if (filter) {
            result = _.where(result, filter);
        }

        result = new Collection(result);

        return result;
    },

    collectAdjacentBattlefieldCardsByCard: function(indexOrCard) {
        var battlefield = this.collectCardsByLocation('battlefield');

        var index;
        if (_.isNumber(indexOrCard)) {
            index = indexOrCard;
        } else {
            index = battlefield.indexOf(indexOrCard);
        }

        var result = new Collection();

        if (index >= 0) {
            if (index > 0) {
                result.add(battlefield.at(index - 1));
            }
            if (index < battlefield.length - 1) {
                result.add(battlefield.at(index + 1));
            }
        }

        return result;
    },

    toString: function() {
        return this.getAccountName();
    }

};



module.exports = Player;
