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

    var getGmCard = function(gcCard) {
        if (!gcCard) {
            return gcCard;
        }

        var location = gcCard.getLocation();

        var gmPlayer = gmPlayer1;
        var gcCards = gcGame1.collectCardsByLocation(location);
        var index = gcCards.indexOf(gcCard);
        if (index < 0) {
            gmPlayer = gmPlayer2;
            gcCards = gcGame2.collectCardsByLocation(location);
            index = gcCards.indexOf(gcCard);
            if (index < 0) {
                gmPlayer = null;
            }
        }

        var gmCard;
        if (gmPlayer) {
            var gmCards = gmPlayer.collectCardsByLocation(location);
            gmCard = gmCards.at(index);
        }

        return gmCard;
    };

    var getCardHandler = function(callback) {
        return function(index, expected) {
            try {
                if (!_.isNumber(index)) {
                    expected = index;
                    index = null;
                }
                var card = gcGame [callback].call(gcGame, index) || null;
                if (expected !== undefined) {
                    if (card) {
                        testUtils.expectCard(card, expected);
                    } else {
                        expect(card).to.equal(expected);
                    }
                }
                return card;
            } catch (ex) {
                gte.outputCurrentGameState();
                // gte.outputPovGameState();
                throw ex;
            }
        };
    };

    var play = function() {
        var i = 0, source, target, index, expectedSourceAfter, expectedTargetAfter, expectedIndexAfter;
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
        if (expectedIndexAfter === undefined) {
            expectedIndexAfter = arguments [i++];
        }
        if (expectedIndexAfter === undefined) {
            expectedIndexAfter = index;
        }
        
        var playInfo = {
            target: target,
            battlefieldIndex: index
        };
        
        var location = source.getLocation();
        source.play(playInfo);
        if (expectedSourceAfter) {
            testUtils.expectCard(source, expectedSourceAfter);
        }
        if (expectedTargetAfter) {
            testUtils.expectCard(target, expectedTargetAfter);
        }
        if ((location === 'hand') && (source.getLocation() === 'battlefield') && (expectedIndexAfter !== null)) {
            expect(source.getGame().getBattlefieldCard(expectedIndexAfter)).to.equal(source);
        }
    };

    var playChooseOne = function() {
        var i = 0, source, chooseOneIndex, target, index, expectedSourceAfter, expectedTargetAfter, expectedIndexAfter;
        source = arguments [i++] || null;
        chooseOneIndex = arguments [i++] || 0;
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
        if (expectedIndexAfter === undefined) {
            expectedIndexAfter = arguments [i++];
        }
        if (expectedIndexAfter === undefined) {
            expectedIndexAfter = index;
        }
        
        var playInfo = {
            chooseOneIndex: chooseOneIndex,
            target: target,
            battlefieldIndex: index
        };
        
        var location = source.getLocation();
        source.play(playInfo);
        if (expectedSourceAfter) {
            testUtils.expectCard(source, expectedSourceAfter);
        }
        if (expectedTargetAfter) {
            testUtils.expectCard(target, expectedTargetAfter);
        }
        if ((location === 'hand') && (source.getLocation() === 'battlefield') && (expectedIndexAfter !== null)) {
            expect(source.getGame().getBattlefieldCard(expectedIndexAfter)).to.equal(source);
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
        playChooseOne: playChooseOne,

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
            predictRoll: function() {
                for (var i = 0; i < arguments.length; i++) {
                    simulation.predictRoll(arguments [i]);
                }
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
        },

        test: {
            expectCard: testUtils.expectCard,
            
            silence: function(gcCard, expected) {
                var gmCard = getGmCard(gcCard);
                gmCard.silence();
                if (expected !== undefined) {
                    testUtils.expectCard(gcCard, expected);
                }
            },

            dealDamage: function(damage, gcCard, expected) {
                var gmCard = getGmCard(gcCard);
                gmCard.dealDamage(damage);
                if (expected !== undefined) {
                    testUtils.expectCard(gcCard, expected);
                }
            },

            healDamage: function(healing, gcCard, expected) {
                var gmCard = getGmCard(gcCard);
                gmCard.healDamage(healing);
                if (expected !== undefined) {
                    testUtils.expectCard(gcCard, expected);
                }
            },
            
            kill: function(gcCard) {
                var gmCard = getGmCard(gcCard);
                gmCard.kill();
                gmGame.handleKilledCards();
            },

            replenishMana: function(mana) {
                if (mana === undefined) {
                    mana = 10;
                }
                var gmPlayer = gte.debug.gmGame.getCurrentPlayer();
                testUtils.setMana(gmPlayer, mana, mana);
            },

            playSpellPowerPlus5: function() {
                var gmPlayer = gte.debug.gmGame.getCurrentPlayer();
                var gmCard = gmPlayer.createCardFromFilter({
                    name: 'Malygos'
                });
                gmCard.moveTo('hand');
                gte.test.replenishMana();
                gte.play(gte.hand(gte.game.getHandCardCount() - 1, 'Malygos'));
                gte.test.replenishMana();
            }
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

    var postSetupPlayerPhase1 = function(gmPlayer, info, playerInfo) {
        if (playerInfo.playCards) {
            testUtils.playHandCards(gmPlayer, playerInfo.playCards);
        }
    };

    var postSetupPlayerPhase2 = function(gmPlayer, info, playerInfo) {
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

        postSetupPlayerPhase1(gmPlayer1, info, info.player1);
        postSetupPlayerPhase1(gmPlayer2, info, info.player2);

        if (info.endTurnAfterPlayingCards) {
            gte.endTurn();
            gte.endTurn();
        }

        postSetupPlayerPhase2(gmPlayer1, info, info.player1);
        postSetupPlayerPhase2(gmPlayer2, info, info.player2);
    }

    return gte;
};



var setupDefaultGameTestEngine = function(info) {
    info = _.defaults(info, {
        startingPlayer: 2,

        player1: {},
        player2: {},
    });

    var setupPlayer = function(key) {
        info [key] = _.defaults(info [key], {
            'class': 'mage',
            deck: [],

            playCards: 0,
            drawCards: 0,

            maxMana: 10,
            currentMana: 10,
            maxHealth: 30,
            currentHealth: 30
        });
    };

    setupPlayer('player1');
    setupPlayer('player2');

    return setupGameTestEngine(info);
};



exports.setupGameTestEngine = setupGameTestEngine;
exports.setupDefaultGameTestEngine = setupDefaultGameTestEngine;
