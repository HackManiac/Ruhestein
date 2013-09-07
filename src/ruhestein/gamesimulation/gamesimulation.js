/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');


var utils = require('../common/lib/utils');

var gameMaster = require('../gamemaster/gamemaster');



var GameSimulation = function() {
    this._rollPredictionList = [];
    this._shufflePredictionList = [];
    this._cardChoicePredictionList = [];

    this._gmAccount1 = new gameMaster.Account({
        accountName: 'Player1'
    });

    this._gmAccount2 = new gameMaster.Account({
        accountName: 'Player2'
    });
};



_.extend(GameSimulation.prototype, {

    getGmAccount1: function() {
        return this._gmAccount1;
    },

    getGmAccount2: function() {
        return this._gmAccount2;
    },

    getGmGame: function() {
        return this._gmGame;
    },

    getGmPlayer1: function() {
        return this._gmPlayer1;
    },

    getGmPlayer2: function() {
        return this._gmPlayer2;
    },

    getGmConnector1: function() {
        return this._gmConnector1;
    },

    getGmConnector2: function() {
        return this._gmConnector2;
    },

    getGcGame1: function() {
        return this._gcGame1;
    },

    getGcGame2: function() {
        return this._gcGame2;
    },

    setupGame: function(gmDeck1, gmDeck2) {
        this._gmGame = new gameMaster.Game();

        this._gmPlayer1 = this._gmGame.join(gmDeck1);
        this._gmPlayer2 = this._gmGame.join(gmDeck2);

        this._gmConnector1 = new gameMaster.Connector(this._gmPlayer1);
        this._gmConnector2 = new gameMaster.Connector(this._gmPlayer2);

        this._gcGame1 = this._gmConnector1.getGcGame();
        this._gcGame2 = this._gmConnector2.getGcGame();
    },

    startGame: function() {
        this._gmGame.startGame();
    },

    disableRandomness: function() {
        var _this = this;

        this._gmGame.roll = function(max) {
            var result;
            if (_this._rollPredictionList.length > 0) {
                result = _this._rollPredictionList.shift();
            } else {
                result = Math.floor(max / 2);
            }
            return utils.cap(result, 1, max);
        };

        this._gmGame.randomShuffleOrder = function(count) {
            var result;
            if (_this._shufflePredictionList.length > 0) {
                result = _this._shufflePredictionList.shift();
            } else {
                result = [];
                for (var i = 0; i < count; i++) {
                    result [i] = i;
                }
            }
            return result;
        };

        this._gmPlayer1.on('!requestCardChoice', this._requestCardChoice, this);
        this._gmPlayer2.on('!requestCardChoice', this._requestCardChoice, this);
    },

    enableRandomness: function() {
        delete this._gmGame.roll;
        delete this._gmGame.randomShuffleOrder;

        this._gmPlayer1.off('!requestCardChoice', this._requestCardChoice, this);
        this._gmPlayer2.off('!requestCardChoice', this._requestCardChoice, this);
    },

    _requestCardChoice: function(cards, minCount, maxCount, reason, callback) {
        var choice, i, n;
        if (this._cardChoicePredictionList.length > 0) {
            choice = this._cardChoicePredictionList.shift();
        } else {
            choice = [];
            for (i = 0; i < maxCount; i++) {
                choice [i] = i;
            }
        }

        var chosenCards = new gameMaster.Collection();
        for (i = 0, n = choice.length; i < n; i++) {
            var index = choice [i];
            var card = ((index >= 0) && (index < cards.length)) ? cards.at(index) : null;
            if (card) {
                chosenCards.push(card);
            }
        }

        callback(chosenCards);
    },

    predictRoll: function(value) {
        this._rollPredictionList.push(value);
    },

    predictShuffleOrder: function(order) {
        this._shufflePredictionList.push(order);
    },

    predictCardChoice: function(choice) {
        this._cardChoicePredictionList.push(choice);
    },

});



module.exports = GameSimulation;
