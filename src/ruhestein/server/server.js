/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var connect = require('connect');
var http = require('http');
var io = require('socket.io');
var _ = require('underscore');


var GameSimulation = require('../gamesimulation/gamesimulation');
var Model = require('../common/models/base/model');
var Collection = require('../common/models/base/collection');



var messageType = 'ruhesteinMessage';



var pendingConnection = null;
var activeConnections = [];



var Connection = function(socket) {
    var _this = this;

    this._socket = socket;

    socket.on(messageType, function(rawMessage, callback) {
        _this._didReceiveRawMessage(rawMessage, callback);
    });

    socket.on('disconnect', function() {
        _this._didDisconnect();
    });
};

_.extend(Connection.prototype, {

    _socket: null,

    _gameSimulation: null,

    _gmAccount: null,

    _gmDeck: null,

    _gmGame: null,

    _gmPlayer: null,

    _gcGame: null,

    getSocket: function() {
        return this._socket;
    },

    getGameSimulation: function() {
        return this._gameSimulation;
    },

    getGmAccount: function() {
        return this._gmAccount;
    },

    getGmDeck: function() {
        return this._gmDeck;
    },

    getGmGame: function() {
        return this._gmGame;
    },

    getGmPlayer: function() {
        return this._gmPlayer;
    },

    getGcGame: function() {
        return this._gcGame;
    },

    _reportError: function(ex) {
        console.log(ex);
    },

    _sendRawMessage: function(rawMessage, callback) {
        var _this = this;

        var secureCallback;
        if (callback) {
            secureCallback = function() {
                try {
                    callback.apply(this, arguments);
                } catch (ex) {
                    _this._reportError(ex);
                }
            };
        }

        this._socket.emit(messageType, rawMessage, secureCallback);
    },

    _sendMessage: function(message, callback) {
        var rawMessage = JSON.stringify(message);

        var wrappedCallback;
        if (callback) {
            wrappedCallback = function(rawResult) {
                var result = JSON.parse(rawResult);
                callback(result);
            };
        }

        this._sendRawMessage(rawMessage, wrappedCallback);
    },

    _didReceiveRawMessage: function(rawMessage, callback) {
        var wrappedCallback;
        if (callback) {
            wrappedCallback = function(result) {
                var rawResult = JSON.stringify(result);
                callback(rawResult);
            };
        }

        try {
            var message = JSON.parse(rawMessage);

            this._didReceiveMessage(message, wrappedCallback);
        } catch (ex) {
            this._reportError(ex);

            var result = {
                error: {
                    exception: true,
                    message: ex.toString(),
                    stack: ex.stack
                }
            };

            wrappedCallback(result);
        }
    },

    _didReceiveMessage: function(msg, callback) {
        if (msg.type === 'joinGame') {
            this._joinGame(msg.playerName, msg.deckUrl, callback);
        } else if (msg.type === 'canPlayCard') {
            this._canPlayCard(msg.card, msg.chooseOneIndex, msg.targetCard, msg.battlefieldIndex, callback);
        } else if (msg.type === 'playCard') {
            this._playCard(msg.card, msg.chooseOneIndex, msg.targetCard, msg.battlefieldIndex, callback);
        } else if (msg.type === 'endTurn') {
            this._endTurn(callback);
        } else if (msg.type === 'concede') {
            this._concede(msg.reason, callback);
        } else {
            throw new Error('Unexpected message type "' + msg.type + '"');
        }
    },

    _didDisconnect: function() {
        if (this === pendingConnection) {
            pendingConnection = null;
        } else {
            this._concede('Connection lost', null);
        }
    },

    _joinGame: function(playerName, deckUrl, callback) {
        var gameSimulation, account;
        if (pendingConnection) {
            gameSimulation = pendingConnection.getGameSimulation();
            account = gameSimulation.getGmAccount2();
        } else {
            gameSimulation = new GameSimulation();
            account = gameSimulation.getGmAccount1();
        }

        account.set('accountName', playerName);

        var deck = account.createDeckFromHearthpwnDeckbuilderUrl('Custom Deck', deckUrl);

        this._gameSimulation = gameSimulation;
        this._gmAccount = account;
        this._gmDeck = deck;

        if (pendingConnection) {
            gameSimulation.setupGame(pendingConnection.getGmDeck(), deck);

            pendingConnection._postSetupGame(1, this);
            this._postSetupGame(2, pendingConnection);

            this.broadcastGameDump('didJoinGame');

            gameSimulation.startGame();

            this.broadcastGameDump('didStartGame');

            pendingConnection = null;
        } else {
            pendingConnection = this;
        }

        var cards = deck.getCards();
        var nyiCards = cards.reduce(function(memo, card) {
            var effects = card.getEffects();
            if (effects.length === 1) {
                var effect = effects.at(0);

                if (effect.cast.toString().indexOf('No cast implementation') >= 0) {
                    memo [card.getEffectId()] = card.getDescription();
                }
            }
            return memo;
        }, {});

        var result = {
            nyiCards: nyiCards
        };
        callback(result);
    },

    _postSetupGame: function(playerNr, otherConnection) {
        var _this = this;

        var gameSimulation = this.getGameSimulation();

        var gmPlayer, gcGame;
        if (playerNr === 1) {
            gmPlayer = this.getGmPlayer1();
            gcGame = this.getGcGame1();
        } else if (playerNr === 2) {
            gmPlayer = this.getGmPlayer2();
            gcGame = this.getGcGame2();
        } else {
            throw new Error('Unexpected player nr "' + playerNr + '"');
        }

        var broadcastGameDump = function(eventName) {
            otherConnection.sendGameDump(eventName);
            _this.sendGameDump(eventName);
        };

        this._gmGame = gameSimulation.getGmGame();
        this._gmPlayer = gmPlayer;
        this._gcGame = gcGame;
        this.broadcastGameDump = broadcastGameDump;

        gcGame.on('requestCardChoice', this._requestCardChoice, this);
    },

    _requestCardChoice: function(cards, minCount, maxCount, reason, callback) {
        var _this = this;

        var msg = {
            type: 'requestCardChoice',
            cards: this._generateModelDump(cards),
            minCount: minCount,
            maxCount: maxCount,
            reason: reason
        };

        var didChooseCards = function(choiceCids) {
            var choice = _.map(choiceCids, function(choiceCid) {
                return _.find(cards, {
                    cid: choiceCid
                });
            });

            callback(choice);
        };

        this.sendMessage(msg, didChooseCards);
    },

    _canPlayCard: function(sourceCardCid, chooseOneIndex, targetCardCid, callback) {
        var _this = this;
        
        var playInfo = this._generatePlayInfo(sourceCardCid, chooseOneIndex, targetCardCid, null);

        var commit = function(error, result) {
            var reply;
            if (error) {
                _this._reportError(error);

                reply = {
                    error: error
                };
            } else {
                reply = result;
            }

            callback(reply);
        };

        if (!this._isPlayersTurn()) {
            commit('Not your turn', null);
        } else if (!playInfo.card) {
            commit('Invalid source card', null);
        } else if (targetCardCid && !playInfo.target) {
            commit('Invalid target card', null);
        } else {
            var playCallback = function(error, result) {
                commit(error, result);
            };

            var canPlayCallback = function(error) {
                if (error) {
                    commit(error, null);
                } else {
                    try {
                        playInfo.card.play(playInfo, playCallback);
                    } catch (ex) {
                        commit(ex, null);
                    }
                }
            };

            playInfo.card.canPlay(playInfo, canPlayCallback);
        }
    },

    _playCard: function(sourceCardCid, chooseOneIndex, targetCardCid, battlefieldIndex, callback) {
        var _this = this;

        var playInfo = this._generatePlayInfo(sourceCardCid, chooseOneIndex, targetCardCid, battlefieldIndex);

        var commit = function(error, result) {
            var reply;
            if (error) {
                _this._reportError(error);

                reply = {
                    error: {
                        message: error
                    }
                };
            } else {
                reply = result;
            }

            callback(reply);
        };

        if (!this._isPlayersTurn()) {
            commit('Not your turn', null);
        } else if (!playInfo.card) {
            commit('Invalid source card', null);
        } else if (targetCardCid && !playInfo.target) {
            commit('Invalid target card', null);
        } else {
            var canPlayCallback = function(error, result) {
                commit(error, result);
            };

            playInfo.card.canPlay(playInfo, canPlayCallback);
        }
    },

    _generatePlayInfo: function(sourceCardCid, chooseOneIndex, targetCardCid, battlefieldIndex) {
        var game = this.getGcGame();

        var validSourceCards = game.collectCardsByLocation('hero,heroPower,hand,battlefield');

        var sourceCard = validSourceCards.find(function(card) {
            return (card.cid === sourceCardCid);
        });

        var targetCard;
        if (targetCardCid) {
            var validTargetCards = game.collectCardsByLocation('hero,battlefield,opponentHero,opponentBattlefield');

            targetCard = validTargetCards.find(function(card) {
                return (card.cid === targetCardCid);
            });
        } else {
            targetCard = targetCardCid;
        }

        var playInfo = {
            card: sourceCard,
            chooseOneIndex: chooseOneIndex,
            target: targetCard,
            battlefieldIndex: battlefieldIndex
        };

        return playInfo;
    },

    _endTurn: function() {
        var error = null;
        if (!this._isPlayersTurn()) {
            error = 'Not your turn';
        } else {
            this.getGcGame().endTurn();
        }

        if (error) {
            this.sendGameError('endTurnDidFail', error);
        } else {
            this.broadcastGameDump('didEndTurn');
        }
    },

    _concede: function(reason) {
        this.getGcGame().concede(reason);

        this.broadcastGameDump('didEndGame');
    },

    _isPlayersTurn: function() {
        return (this.getGmGame().getCurrentPlayer() === this.getGmPlayer());
    },

    _sendGameDump: function(eventName) {
        var message = this._generateGameDump(eventName);
        this.sendMessage(message);
    },

    _generateGameDump: function(eventName) {
        var game = this.getClientGame();

        var data = {
            msg: eventName,
            game: this._generateModelDump(game)
        };

        data.game.myTurn = (this.getServerGame().getCurrentPlayer() === this.getServerPlayer());
        data.game.sessionId = this._socket.id;

        return data;
    },

    _generateModelDump: function(model) {
        var knownCids = {};

        // var depth = '';

        var dumpModelTree = function(model) {
            // console.log(depth, model && model.constructor, model && model.cid);

            // var oDepth = depth;
            // depth += '    ';

            var result;
            if (model instanceof Model) {
                result = {};

                if (knownCids [model.cid]) {
                    result._cidRef = model.cid;
                } else {
                    knownCids [model.cid] = true;
                    result._cid = model.cid;

                    _.forEach(model.attributes, function(value, key) {
                        // console.log(depth, key);
                        result [key] = dumpModelTree(value);
                    });
                }
            } else if (model instanceof Collection) {
                result = [];
                _.forEach(model.models, function(value, key) {
                    // console.log(depth, key);
                    result [key] = dumpModelTree(value);
                });
            } else if (_.isArray(model)) {
                result = [];
                _.forEach(model, function(value, key) {
                    // console.log(depth, key);
                    result [key] = dumpModelTree(value);
                });
            } else {
                result = model;
            }

            // depth = oDepth;

            return result;
        };

        return dumpModelTree(model);
    },


});



var start = function() {
    var server = connect()
        .use(connect.logger('dev'))
        .use(connect.static('.tmp'))
        .use(connect.static('app'));

    var httpServer = http.createServer(server);
    io = io.listen(httpServer, { log: false });
    httpServer.listen(3000);

    io.sockets.on('connection', function(socket) {
        var connection = new Connection(socket);
        activeConnections.push(connection);
    });
};



exports.start = start;
