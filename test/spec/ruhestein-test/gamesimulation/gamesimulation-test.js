/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');


var Ruhestein = require('ruhestein');


var testUtils = require('../test-utils');



describe('GameSimulation', function() {

    var GameSimulation = Ruhestein.GameSimulation;

    it('should be a function', function() {
        expect(GameSimulation).to.be.a('function');
    });

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

    it('should solve puzzle #1', function() {
        var gte = setupGameTestEngine({
            startingPlayer: 1,

            player1: {
                'class': 'druid',
                deck: [
                    '2 Abomination',
                    '2 Ironbark Protector',
                    '1 Lord of the Arena',
                    '2 Mogu\'shan Warden',
                    '1 Sen\'jin Shieldmasta'
                ],
                playCards: 8,
                drawCards: 0,
            },

            player2: {
                'class': 'warrior',
                deck: [
                    '1 Flesheating Ghoul',
                    '1 Frothing Berserker',
                    '1 Gurubashi Berserker',
                    '1 Mana Addict',
                    '1 Pint-Sized Summoner',
                    '1 Wild Pyromancer',
                    '1 Dire Wolf Alpha',
                    '1 Ironbeak Owl',
                    '1 Shield Slam',
                    '1 Cruel Taskmaster',
                    '1 Faceless Manipulator',
                    '1 Big Game Hunter',
                    '1 Rampage',
                    '1 Charge',
                ],
                playCards: 5,
                drawCards: 8,
            }
        });

        var numberOfTaunters = function() {
            var count = 0;
            for (var i = 0, n = gte.game.getOpponentBattlefieldCardCount(); i < n; i++) {
                var card = gte.game.getOpponentBattlefieldCard(i);
                if (card.hasTaunt()) {
                    count++;
                }
            }
            return count;
        };


    });

    describe('Noxious #2: Rogue vs Mage', function() {
        var g;

        var tmpCard, tmpCards;

        it('should play the game correctly', function() {
            // P1-T1
            g.play(g.hand(0, '1/2 Goldshire Footman'), 0);
            g.endTurn();

            // P2-T1
            g.oHero('0/30');
            g.oBattlefield(0, '1/2 Goldshire Footman');
            g.gm.predictRoll(1);
            g.gm.predictRoll(2);
            g.gm.predictRoll(1);
            g.play(g.hand(3, 'Arcane Missiles'));
            g.oHero('0/28');
            g.oBattlefield(0, '1/1 Goldshire Footman');
            g.endTurn();

            // P1-T2
            g.play(g.heroPower('Dagger Mastery'));
            g.play(g.battlefield(0, '1/1 Goldshire Footman'), g.oHero('0/30'), null, '0/29');
            g.play(g.hero('1/28'), g.oHero('0/29'), null, '0/28');
            g.endTurn();

            // P2-T2
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '1/1 Goldshire Footman'), null, '{Dead}');
            g.endTurn();

            // P1-T3
            g.play(g.heroPower('Dagger Mastery'));
            g.play(g.hero('2/28'), g.oHero('0/28'), '0/28', '0/26');
            g.endTurn();

            // P2-T3
            g.play(g.hand(0, '2/1 Murloc Tidehunter'), 0);
            g.battlefield(1, '1/1 Murloc Scout');
            g.play(g.hand(2, 'The Coin'));
            g.play(g.hand(1, '1/2 Novice Engineer'), 2);
            g.hand(4, '2/3 Razorfen Hunter');
            g.endTurn();

            // P1-T4
            g.play(g.hand(0, '2/4 Gnomish Inventor'), 0);
            g.play(g.hand(0, 'Backstab'), g.oBattlefield(2, '1/2 Novice Engineer'), null, 'Dead');
            g.endTurn();

            // P2-T4
            g.play(g.hand(4, '2/3 Razorfen Hunter'), 2);
            g.battlefield(3, '1/1 Boar');
            g.play(g.battlefield(0, '2/1 Murloc Tidehunter'), g.oHero('0/28'), null, '0/26');
            g.play(g.battlefield(1, '1/1 Murloc Scout'), g.oHero('0/26'), null, '0/25');
            g.endTurn();

            // P1-T5
            g.play(g.hand(0, '4/2 Stormpike Commando'), g.oBattlefield(0, '2/1 Murloc Tidehunter'), 1, null, 'Dead');
            g.play(g.battlefield(0, '2/4 Gnomish Inventor'), g.oBattlefield(2, '1/1 Boar'), '2/3', 'Dead');
            g.endTurn();

            // P2-T5
            g.play(g.hand(5, '4/4 Frostwolf Warlord'), 2, '6/6');
            g.play(g.battlefield(1, '2/3 Razorfen Hunter'), g.oBattlefield(1, '4/2 Stormpike Commando'), 'Dead', 'Dead');
            g.battlefield(1, '5/5 Frostwolf Warlord');
            g.play(g.battlefield(0, '1/1 Murloc Scout'), g.oHero('0/25'), null, '0/24');
            g.endTurn();

            // P1-T6
            g.play(g.battlefield(0, '2/3 Gnomish Inventor'), g.oBattlefield(0, '1/1 Murloc Scout'), '2/2', 'Dead');
            g.oHero('0/26');
            g.play(g.hand(0, '4/4 Nightblade'), 1);
            g.oHero('0/23');
            g.endTurn();

            // P2-T6
            g.play(g.hand(3, 'Polymorph'), g.oBattlefield(1, '4/4 Nightblade'), null, '1/1 Sheep');
            g.play(g.hand(4, 'Arcane Explosion'));
            g.oBattlefield(0, '2/1 Gnomish Inventor');
            g.oBattlefield(1, null);
            g.play(g.battlefield(0, '4/4 Frostwolf Warlord'), g.oHero('0/24'), null, '0/20');
            g.endTurn();

            // P1-T7
            g.play(g.hand(0, '2/4 Gnomish Inventor'), 0);
            g.play(g.heroPower('Dagger Mastery'));
            g.play(g.hand(0, 'Deadly Poison'));
            g.weapon('3/2 Wicked Knife');
            g.play(g.hero('3/20'), g.oHero('0/23'), null, '0/20');
            g.play(g.battlefield(1, '2/1 Gnomish Inventor'), g.oBattlefield(0, '4/4 Frostwolf Warlord'), 'Dead', '4/2');
            g.endTurn();

            // P2-T7
            g.play(g.hand(4, '2/1 Murloc Tidehunter'), 1);
            g.battlefield(2, '1/1 Murloc Scout');
            g.battlefield(0, '6/4 Frostwolf Warlord');
            g.play(g.hand(3, '1/2 Novice Engineer'), 3);
            g.battlefield(0, '7/5 Frostwolf Warlord');
            g.play(g.hand(3, '3/2 Acidic Swamp Ooze'), 4);
            g.battlefield(0, '8/6 Frostwolf Warlord');
            g.oWeapon(null);
            g.play(g.battlefield(0, '8/6 Frostwolf Warlord'), g.oHero('0/20'), '8/6', '0/12');
            g.endTurn();

            // P1-T8
            g.play(g.battlefield(0, '2/4 Gnomish Inventor'), g.oBattlefield(4, '3/2 Acidic Swamp Ooze'), '2/1', 'Dead');
            g.oBattlefield(0, '7/6 Frostwolf Warlord');
            g.play(g.hand(0, '2/4 Dragonling Mechanic'), 0);
            g.battlefield(2, '2/1 Mechanical Dragonling');
            g.play(g.hand(0, '2/5 Stormwind Knight'), 0);
            g.play(g.battlefield(0, '2/5 Stormwind Knight'), g.oBattlefield(1, '2/1 Murloc Tidehunter'), '2/3', 'Dead');
            g.oBattlefield(0, '6/6 Frostwolf Warlord');
            g.endTurn();

            // P2-T8
            g.play(g.hand(1, 'Arcane Explosion'));
            g.oBattlefield(0, '2/2 Stormwind Knight');
            g.oBattlefield(1, '2/3 Dragonling Mechanic');
            g.oBattlefield(2, null);
            g.play(g.hand(2, '4/4 Frostwolf Warlord'), 3, '7/7');
            g.battlefield(0, '7/7 Frostwolf Warlord');
            g.play(g.battlefield(0, '7/7 Frostwolf Warlord'), g.oHero('0/12'), null, '0/5');
            g.play(g.battlefield(2, '1/2 Novice Engineer'), g.oBattlefield(0, '2/2 Stormwind Knight'), 'Dead', '2/1');
            g.play(g.battlefield(1, '1/1 Murloc Scout'), g.oBattlefield(0, '2/1 Stormwind Knight'), 'Dead', 'Dead');
            g.endTurn();

            // P1-T9
            g.play(g.hand(0, 'Sap'), g.oBattlefield(1, '5/5 Frostwolf Warlord'), null, '4/4');
            g.play(g.hand(0, '1/2 Novice Engineer'), 0);
            g.play(g.hand(0, '1/2 Novice Engineer'), 0);
            g.play(g.heroPower('Dagger Mastery'));
            g.play(g.hero('1/5'), g.oHero('0/20'), null, '0/19');
            g.play(g.hand(0, '1/1 Elven Archer'), g.oBattlefield(0, '4/4 Frostwolf Warlord'), null, '4/3');
            g.play(g.battlefield(2, '2/3 Dragonling Mechanic'), g.oBattlefield(0, '4/3 Frostwolf Warlord'), 'Dead', '4/1');
            g.endTurn();

            // P2-T9
            g.play(g.battlefield(0, '4/1 Frostwolf Warlord'), g.oHero('0/5'), null, '0/1');
            g.gm.predictRoll(4);
            g.gm.predictRoll(2);
            g.gm.predictRoll(3);
            g.play(g.hand(3, 'Arcane Missiles'));
            g.oBattlefield(0, '1/1 Novice Engineer');
            g.oBattlefield(1, '1/1 Novice Engineer');
            g.oBattlefield(2, null);
            g.play(g.hand(0, 'Arcane Intellect'));
            g.play(g.hand(2, '3/2 Acidic Swamp Ooze'), 1);
            g.oWeapon(null);
            g.play(g.heroPower('Fireblast'), g.oHero('0/1'), null, 'Dead');
        });
        g = setupGameTestEngine({
            startingPlayer: 1,

            player1: {
                'class': 'Rogue',
                deck: [
                    '1 Goldshire Footman',
                    '1 Gnomish Inventor',
                    '1 Backstab',
                    '1 Stormpike Commando',
                    '1 Nightblade',
                    '1 Gnomish Inventor',
                    '1 Deadly Poison',
                    '1 Dragonling Mechanic',
                    '1 Stormwind Knight',
                    '1 Sap',
                    '1 Novice Engineer',
                    '1 Novice Engineer',
                    '1 Elven Archer',
                ],
            },

            player2: {
                'class': 'Mage',
                deck: [
                    '1 Murloc Tidehunter',
                    '1 Arcane Intellect',
                    '1 Novice Engineer',
                    '1 Arcane Missiles',
                    '1 Arcane Explosion',
                    '1 Polymorph',
                    '1 Polymorph',
                    '1 Razorfen Hunter',
                    '1 Novice Engineer',
                    '1 Frostwolf Warlord',
                    '1 Arcane Explosion',
                    '1 Murloc Tidehunter',
                    '1 Acidic Swamp Ooze',
                    '1 Frostwolf Warlord',
                    '1 Arcane Missiles',
                    '1 Acidic Swamp Ooze',
                    '1 Raid Leader',
                ],
            }
        });

    });

});
