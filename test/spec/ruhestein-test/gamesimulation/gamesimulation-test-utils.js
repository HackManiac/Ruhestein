/**
* @license
* Ruhestein - A Hearthstone game mechanics simulator
*/
'use strict';



var _ = require('underscore');


var Ruhestein = require('ruhestein');


var testUtils = require('../test-utils');



var GameSimulation = Ruhestein.GameSimulation;



var setupGameTestEngine = function(info) {
    var simulation = new GameSimulation();

    var createDeck = function(account, playerInfo) {
        var cockatriceExport = playerInfo.deck;

        if (_.isArray(cockatriceExport)) {
            cockatriceExport = cockatriceExport.join('\n');
        }

        var deck = account.createDeckFromCockatriceExport(account.getAccountName(), playerInfo.class, cockatriceExport);

        var cards = deck.getCards(), card;
        while (cards.length < 30) {
            card = account.createCardFromFilter({
                name: 'NOOOOOOOOOOOO',
                isToken: true
            });

            cards.add(card);
        }

        return deck;
    };

    var deck1 = createDeck(simulation.getGmAccount1(), info.player1);
    var deck2 = createDeck(simulation.getGmAccount2(), info.player2);

    simulation.setupGame(deck1, deck2);

    simulation.disableRandomness();

    var gmGame = simulation.getGmGame();
    var gmPlayer1 = simulation.getGmPlayer1();
    var gmPlayer2 = simulation.getGmPlayer2();

    var gcGame1 = simulation.getGcGame1();
    var gcGame2 = simulation.getGcGame2();

    var gte, gcGame;

    var getCardHandler = function(callback) {
        return function(index, expected) {
            try {
                if (!_.isNumber(index)) {
                    expected = index;
                    index = null;
                }
                var card = gcGame [callback].call(gcGame, index);
                if (expected !== undefined) {
                    if (card) {
                        testUtils.expectCard(card, expected);
                    } else {
                        expect(card).to.equal(expected);
                    }
                }
                return card;
            } catch (ex) {
                gte.outputPovGameState();
                throw ex;
            }
        };
    };

    var play = function() {
        var i = 0, source, target, index, expectedSourceAfter, expectedTargetAfter;
        source = arguments [i++] || null;
        if (target === undefined) {
            target = arguments [i++];
            if (_.isNumber(target)) {
                index = target;
                target = null;
            } else if (!target) {
                target = null;
            }
        }
        if (index === undefined) {
            index = arguments [i++];
            if (_.isNumber(index)) {
                // ok
            } else if (_.isString(index)) {
                expectedSourceAfter = index;
                index = null;
            } else if (!index) {
                expectedSourceAfter = null;
                index = null;
            }
        }
        if (expectedSourceAfter === undefined) {
            expectedSourceAfter = arguments [i++] || null;
        }
        if ((expectedSourceAfter === null) && source) {
            expectedSourceAfter = source.toString();
        }
        if (expectedTargetAfter === undefined) {
            expectedTargetAfter = arguments [i++] || null;
        }
        if ((expectedTargetAfter === null) && target) {
            expectedTargetAfter = target.toString();
        }
        var location = source.getLocation();
        source.play(target, index);
        if (expectedSourceAfter) {
            testUtils.expectCard(source, expectedSourceAfter);
        }
        if (expectedTargetAfter) {
            testUtils.expectCard(target, expectedTargetAfter);
        }
        if ((location === 'hand') && (source.getLocation() === 'battlefield') && (index !== null)) {
            expect(source.getGame().getBattlefieldCard(index)).to.equal(source);
        }
    };

    gte = {
        game: null,

        hero: getCardHandler('getHero'),
        heroPower: getCardHandler('getHeroPower'),
        weapon: getCardHandler('getWeapon'),
        secret: getCardHandler('getSecret'),
        hand: getCardHandler('getHandCard'),
        battlefield: getCardHandler('getBattlefieldCard'),

        oHero: getCardHandler('getOpponentHero'),
        oHeroPower: getCardHandler('getOpponentHeroPower'),
        oWeapon: getCardHandler('getOpponentWeapon'),
        oBattlefield: getCardHandler('getOpponentBattlefieldCard'),

        play: play,

        endTurn: function() {
            gcGame.endTurn();
        },

        outputCurrentGameState: function() {
            testUtils.outputGameState(gcGame);
        },
        outputPovGameState: function() {
            testUtils.outputGameState(gcGame2);
        },

        gm: {
            predictRoll: function(value) {
                simulation.predictRoll(value);
            },

            predictCardChoice: function(choice) {
                simulation.predictCardChoice(choice);
            },

            startGame: function(playerNr) {
                simulation.predictRoll(playerNr);

                simulation.startGame();

                if (playerNr === 1) {
                    expect(gmGame.getCurrentPlayer()).to.equal(gmPlayer1);
                    expect(gcGame).to.equal(gcGame1);
                } else if (playerNr === 2) {
                    expect(gmGame.getCurrentPlayer()).to.equal(gmPlayer2);
                    expect(gcGame).to.equal(gcGame2);
                } else {
                    throw new Error('Unexpected Player nr.');
                }
            },
        },

        debug: {
            simulation: simulation,
            gmGame: gmGame,
            gmPlayer1: gmPlayer1,
            gmPlayer2: gmPlayer2,
            gcGame1: gcGame1,
            gcGame2: gcGame2,
        }
    };

    gmGame.on('didStartTurn', function(info) {
        if (info.player === gmPlayer1) {
            gcGame = gcGame1;
        } else if (info.player === gmPlayer2) {
            gcGame = gcGame2;
        } else {
            gcGame = null;
        }
        gte.game = gcGame;
    });

    var postSetupPlayer = function(gmPlayer, info, playerInfo) {
        if (playerInfo.playCards) {
            testUtils.playHandCards(gmPlayer, playerInfo.playCards);
        }
        if (playerInfo.drawCards) {
            testUtils.drawUntilHandCardCountEquals(gmPlayer, playerInfo.drawCards);
        }
        if (playerInfo.maxMana || playerInfo.currentMana) {
            testUtils.setMana(gmPlayer, playerInfo.currentMana, playerInfo.maxMana);
        }
        if (playerInfo.maxHealth || playerInfo.currentHealth) {
            testUtils.setHealth(gmPlayer, playerInfo.currentHealth, playerInfo.maxHealth);
        }
    };

    if (info.startingPlayer !== undefined) {
        simulation.predictRoll(info.startingPlayer);

        simulation.startGame();

        postSetupPlayer(gmPlayer1, info, info.player1);
        postSetupPlayer(gmPlayer2, info, info.player2);
    }

    return gte;
};



exports.setupGameTestEngine = setupGameTestEngine;
