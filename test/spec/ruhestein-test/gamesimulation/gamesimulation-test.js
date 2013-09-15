/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('./gamesimulation-test-utils');



describe('GameSimulation', function() {

    var GameSimulation = Ruhestein.GameSimulation;

    var setupGameTestEngine = GameSimulationTestUtils.setupGameTestEngine;
    
    it('should be a function', function() {
        expect(GameSimulation).to.be.a('function');
    });

    require('./effects-test');

    describe('Hearthpwn puzzle #1', function() {
        var g, preparePuzzle, tmpCards, tmpCard, tmpInfo;

        var numberOfTaunters = function() {
            var count = 0;
            for (var i = 0, n = g.game.getOpponentBattlefieldCardCount(); i < n; i++) {
                var card = g.game.getOpponentBattlefieldCard(i);
                if (card.hasTaunt()) {
                    count++;
                }
            }
            return count;
        };

        it('should prepare the puzzle correctly', function() {
            preparePuzzle();
        });

        it('should solve the puzzle correctly', function() {
            expect(g.game.getCurrentMana()).to.equal(10);
            expect(numberOfTaunters()).to.equal(8);

            // 1) Play Wild Pyromancer.  10 mana remaining.  (free from pint sized summoner)
            g.play(g.hand(0, '3/2 Wild Pyromancer'), null, '3/2 {EffectTrigger,ZZZ}');
            expect(g.game.getCurrentMana()).to.equal(10);

            // 2) Use Hero Power. 2 Armor. 8 mana remaining.
            g.hero('0/1 [0]');
            g.play(g.heroPower('Armor Up!'), null);
            g.hero('0/1 [2]');
            expect(g.game.getCurrentMana()).to.equal(8);

            // 3) Play Ironbeak Owl targetting 1 Abom. 6 mana remaining. 7 Taunters remain.
            g.play(g.hand(1, 'Ironbeak Owl'), g.oBattlefield(0, 'Abomination {Deathrattle,Taunt}'), '{ZZZ}', '{Silenced}');
            expect(g.game.getCurrentMana()).to.equal(6);
            expect(numberOfTaunters()).to.equal(7);

            // 4) Shield Slam the Lord of the Arena.  Wild Pyromancer triggers. 5 mana remaining.
            tmpCard = g.oBattlefield(4, '6/5 Lord of the Arena');
            tmpCards = g.game.collectCardsByLocation('allBattlefields');
            tmpInfo = tmpCards.reduce(function(memo, card) {
                memo [card.cid] = card.getCurrentHealth();
                return memo;
            }, {});
            g.play(g.hand(1, 'Shield Slam'), tmpCard, '{Dead}', '6/2');
            tmpCards.forEach(function(card) {
                var oldHealth = tmpInfo [card.cid];
                if (card === tmpCard) {
                    g.test.expectCard(card, '6/2');
                } else if (oldHealth === 1) {
                    g.test.expectCard(card, '{Dead}');
                } else {
                    expect(card.getCurrentHealth()).to.equal(oldHealth - 1);
                }
            });
            expect(g.game.getCurrentMana()).to.equal(5);

            // 5) Pint Sized Summoner attacks the Sen-jin Shieldmaster. (reduced to 2 Health).
            g.play(g.battlefield(4, '2/1 Pint-Sized Summoner'), g.oBattlefield(7, '3/4 Sen\'jin Shieldmasta'), '{Dead}', '3/2');

            // 6) Play Big Game Hunter targeting 1 8/8 Protector.  2 mana remaining.  6 Taunters remain.
            g.play(g.hand(3, '4/2 Big Game Hunter'), g.oBattlefield(2, '8/7 Ironbark Protector'), '{ZZZ}', '{Dead}');
            expect(g.game.getCurrentMana()).to.equal(2);
            expect(numberOfTaunters()).to.equal(6);

            // 7) Play Rampage on the Frothing Berserker.  Wild Pyromancer triggers. He dies.  0 mana remaining.
            tmpCard = g.battlefield(1, '20/3 Frothing Berserker');
            tmpCards = g.game.collectCardsByLocation('allBattlefields');
            tmpInfo = tmpCards.reduce(function(memo, card) {
                memo [card.cid] = card.getCurrentHealth();
                return memo;
            }, {});
            g.play(g.hand(3, 'Rampage'), tmpCard, '{Dead}', '{EffectTrigger}');
            tmpCards.forEach(function(card) {
                var oldHealth = tmpInfo [card.cid];
                if (card === tmpCard) {
                    g.test.expectCard(card, '{EffectTrigger}');
                } else if (oldHealth === 1) {
                    expect(card.isDiscarded()).to.equal(true);
                } else {
                    expect(card.getCurrentHealth()).to.equal(oldHealth - 1);
                }
            });
            expect(g.game.getCurrentMana()).to.equal(0);

            // 8) Mana Addict attacks Mogu #1 for 5, both die.  5 Taunters remain.
            g.play(g.battlefield(3, '5/1 Mana Addict'), g.oBattlefield(4, '1/5 Mogu\'shan Warden'), '{Dead}', '{Dead}');
            expect(numberOfTaunters()).to.equal(5);

            // 9) Gurubashi Berserker attacks the second 8/8 protector for 6, both die.  4 Taunters remain.
            g.play(g.battlefield(2, '8/5 Gurubashi Berserker'), g.oBattlefield(2, '8/6 Ironbark Protector'), '{Dead}', '{Dead}');
            expect(numberOfTaunters()).to.equal(4);

            // 10) Ghoul attacks Mogu #2 for 6, both die, 3 Taunters remain.
            g.play(g.battlefield(0, '10/1 Flesheating Ghoul'), g.oBattlefield(3, '1/5 Mogu\'shan Warden'), '{Dead}', '{Dead}');
            expect(numberOfTaunters()).to.equal(3);

            // 11) Play Charge on BGH. then attack the non-silenced Abom.  It explodes, killing the last 2 remaining taunters with it (who were previously weakened by double pyromancer and either shield slam or an attack from the pint sized summoner).
            g.play(g.hand(3, 'Charge'), g.battlefield(1, '4/1 Big Game Hunter {ZZZ}'), '{Dead}', '{Charge}');
            tmpCard = g.hero('0/1 [2]');
            tmpCards = g.game.collectCardsByLocation('allCharacters');
            tmpInfo = tmpCards.reduce(function(memo, card) {
                memo [card.cid] = card.getCurrentHealth();
                return memo;
            }, {});
            g.play(g.battlefield(1, '4/1 Big Game Hunter'), g.oBattlefield(1, '4/2 Abomination'), '{Dead}', '{Dead}');
            tmpCards.forEach(function(card) {
                var oldHealth = tmpInfo [card.cid];
                if (card === tmpCard) {
                    g.test.expectCard(card, '0/1 [0]');
                } else if (oldHealth <= 2) {
                    expect(card.isDiscarded()).to.equal(true);
                } else {
                    expect(card.getCurrentHealth()).to.equal(oldHealth - 2);
                }
            });
            expect(numberOfTaunters()).to.equal(0);

            // 12) Attack enemy hero for 43 damage with Frothing Berserker.
            g.play(g.battlefield(0, '49/3 Frothing Berserker'), g.oHero('0/28'), '49/3', '{Dead}');
        });

        preparePuzzle = function() {
            g = setupGameTestEngine({
                startingPlayer: 2,
                endTurnAfterPlayingCards: true,

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
                    maxMana: 10,
                    currentMana: 10,
                    maxHealth: 30,
                    currentHealth: 30
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
                    drawCards: 9,
                    maxMana: 10,
                    currentMana: 10,
                    maxHealth: 30,
                    currentHealth: 1
                }
            });
        };
    });

    describe('Noxious #1: Priest vs Mage', function() {
        var g, tmpCard, tmpCards;

        it('should play the game correctly', function() {
            // P2-T1
            g.endTurn();

            // P1-T1
            g.endTurn();

            // P2-T2
            g.play(g.hand(1, '3/2 Bloodfen Raptor'), 0);
            g.endTurn();

            // P1-T2
            g.play(g.hand(0, '1/3 Northshire Cleric'), 0);
            g.endTurn();

            // P2-T3
            tmpCard = g.oBattlefield(0, '1/3 Northshire Cleric');
            g.gm.predictRoll(2);  // 2 = Battlefield #0
            g.gm.predictRoll(2);
            g.gm.predictRoll(2);
            g.play(g.hand(3, 'Arcane Missiles'));
            g.test.expectCard(tmpCard, '{Dead}');
            g.play(g.heroPower('Fireblast'), g.oHero('0/30'), null, '0/29');
            g.play(g.battlefield(0, '3/2 Bloodfen Raptor'), g.oHero('0/29'), '3/2', '0/26');
            g.endTurn();

            // P1-T3
            g.play(g.hand(0, '1/3 Northshire Cleric'), 0);
            g.endTurn();

            // P2-T4
            g.play(g.battlefield(0, '3/2 Bloodfen Raptor'), g.oBattlefield(0, '1/3 Northshire Cleric'), '3/1', '{Dead}');
            g.play(g.hand(3, '2/7 Oasis Snapjaw'), 1);
            g.endTurn();

            // P1-T4
            g.play(g.hand(0, '2/2 Frostwolf Grunt'), 0);
            g.play(g.hand(0, '3/2 Bloodfen Raptor'), 0);
            g.play(g.hand(0, 'The Coin'));
            g.endTurn();

            // P2-T5
            g.oBattlefield(0, '3/2 Bloodfen Raptor');
            g.oBattlefield(1, '2/2 Frostwolf Grunt');
            g.play(g.hand(0, 'Arcane Explosion'));
            g.oBattlefield(0, '3/1 Bloodfen Raptor');
            g.oBattlefield(1, '2/1 Frostwolf Grunt');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(1, '2/1 Frostwolf Grunt'), null, '{Dead}');
            g.play(g.battlefield(1, '2/7 Oasis Snapjaw'), g.oBattlefield(0, '3/1 Bloodfen Raptor'), '2/4', '{Dead}');
            g.play(g.battlefield(0, '3/1 Bloodfen Raptor'), g.oHero('0/26'), null, '0/23');
            g.endTurn();

            // P1-T5
            g.play(g.hand(0, '2/7 Gurubashi Berserker'), 0);
            g.endTurn();

            // P2-T6
            g.play(g.hand(4, '1/2 Novice Engineer'), 2);
            g.hand(4, '3/5 Sen\'jin Shieldmasta');
            g.play(g.battlefield(1, '2/4 Oasis Snapjaw'), g.oHero('0/23'), null, '0/21');
            g.play(g.battlefield(0, '3/1 Bloodfen Raptor'), g.oHero('0/21'), null, '0/18');
            g.play(g.hand(3, '3/2 Bloodfen Raptor'), 3);
            g.play(g.heroPower('Fireblast'), g.oHero('0/18'), null, '0/17');
            g.endTurn();

            // P1-T6
            g.play(g.battlefield(0, '2/7 Gurubashi Berserker'), g.oBattlefield(0, '3/1 Bloodfen Raptor'), '5/4', '{Dead}');
            g.play(g.heroPower('Lesser Heal'), g.hero('0/17'), null, '0/19');
            g.play(g.hand(0, '4/5 Chillwind Yeti'), 0);
            g.endTurn();

            // P2-T7
            g.play(g.heroPower('Fireblast'), g.oBattlefield(1, '5/4 Gurubashi Berserker'), null, '8/3');
            g.play(g.battlefield(2, '3/2 Bloodfen Raptor'), g.oBattlefield(1, '8/3 Gurubashi Berserker'), '{Dead}', '{Dead}');
            g.oHero('0/19');
            g.play(g.hand(2, '4/4 Nightblade'), 2);
            g.oHero('0/16');
            g.play(g.battlefield(1, '1/2 Novice Engineer'), g.oHero('0/16'), null, '0/15');
            g.play(g.battlefield(0, '2/4 Oasis Snapjaw'), g.oHero('0/15'), null, '0/13');
            g.endTurn();

            // P1-T7
            g.play(g.battlefield(0, '4/5 Chillwind Yeti'), g.oBattlefield(2, '4/4 Nightblade'), '4/1', '{Dead}');
            g.play(g.heroPower('Lesser Heal'), g.hero('0/13'), null, '0/15');
            g.play(g.hand(0, '2/1 Voodoo Doctor'), g.hero('0/15'), 1, null, '0/17');
            g.play(g.hand(0, '3/3 Shattered Sun Cleric'), g.battlefield(0, '4/1 Chillwind Yeti'), 0, null, '5/2');
            g.play(g.hand(0, '1/1 Elven Archer'), g.oBattlefield(0, '2/4 Oasis Snapjaw'), 3, null, '2/3');
            g.endTurn();

            // P2-T8
            g.play(g.heroPower('Fireblast'), g.oBattlefield(2, '2/1 Voodoo Doctor'), null, '{Dead}');
            g.play(g.battlefield(1, '1/2 Novice Engineer'), g.oBattlefield(2, '1/1 Elven Archer'), '1/1', '{Dead}');
            g.oHero('0/17');
            g.oBattlefield(1, '5/2 Chillwind Yeti');
            g.gm.predictRoll(3);
            g.gm.predictRoll(3);
            g.gm.predictRoll(1);
            g.play(g.hand(4, 'Arcane Missiles'));
            g.oHero('0/16');
            g.oBattlefield(1, null);
            g.play(g.hand(2, '3/5 Sen\'jin Shieldmasta'), 2);
            g.play(g.battlefield(0, '2/3 Oasis Snapjaw'), g.oHero('0/16'), null, '0/14');
            g.endTurn();

            // P1-T8
            g.play(g.hand(0, 'Shadow Word: Pain'), g.oBattlefield(2, '3/5 Sen\'jin Shieldmasta'), null, '{Dead}');
            g.play(g.battlefield(0, '3/3 Shattered Sun Cleric'), g.oBattlefield(0, '2/3 Oasis Snapjaw'), '3/1', '{Dead}');
            g.play(g.heroPower('Lesser Heal'), g.hero('0/14'), null, '0/16');
            g.play(g.hand(0, '1/1 Elven Archer'), g.oBattlefield(0, '1/1 Novice Engineer'), null, '{Dead}');
            g.endTurn();

            // P2-T9
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '3/1 Shattered Sun Cleric'), null, '{Dead}');
            g.play(g.hand(3, '3/5 Sen\'jin Shieldmasta'), 0);
            g.play(g.hand(0, 'Arcane Intellect'));
            g.endTurn();

            // P1-T9
            g.play(g.hand(0, 'Shadow Word: Pain'), g.oBattlefield(0, '3/5 Sen\'jin Shieldmasta'), null, '{Dead}');
            g.play(g.hand(0, '9/5 Core Hound'), 0);
            g.play(g.battlefield(1, '1/1 Elven Archer'), g.oHero('0/30'), null, '0/29');
            g.endTurn();

            // P2-T10
            g.play(g.hand(3, 'Polymorph'), g.oBattlefield(0, '9/5 Core Hound'), null, null);
            g.oBattlefield(0, '1/1 Sheep');
            g.oHero('0/16');
            g.play(g.hand(0, '4/4 Nightblade'), 0);
            g.oHero('0/13');
            g.endTurn();

            // P1-T10
            g.play(g.heroPower('Lesser Heal'), g.hero('0/13'), null, '0/15');
            g.play(g.hand(0, 'Power Word: Shield'), g.battlefield(0, '1/1 Sheep'), null, '1/4');
            g.play(g.battlefield(0, '1/4 Sheep'), g.oBattlefield(0, '4/4 Nightblade'), '{Dead}', '4/3');
            g.play(g.battlefield(0, '1/1 Elven Archer'), g.oBattlefield(0, '4/3 Nightblade'), '{Dead}', '4/2');
            g.endTurn();

            // P2-T11
            g.battlefield(0, '4/2 Nightblade');
            g.play(g.hand(3, '2/2 Raid Leader'), 1);
            g.battlefield(0, '5/2 Nightblade');
            g.play(g.hand(2, 'Fireball'), g.oHero('0/15'), null, '0/9');
            g.play(g.hand(1, '3/1 Wolfrider'), 2, '4/1');
            g.play(g.battlefield(2, '4/1 Wolfrider'), g.oHero('0/9'), null, '0/5');
            g.play(g.battlefield(0, '5/2 Nightblade'), g.oHero('0/5'), null, '{Dead}');
        });

        g = setupGameTestEngine({
            startingPlayer: 2,

            player1: {
                'class': 'Priest',
                deck: [
                    '1 Northshire Cleric',
                    '1 Northshire Cleric',
                    '1 Frostwolf Grunt',
                    '1 Bloodfen Raptor',
                    '1 Gurubashi Berserker',
                    '1 Chillwind Yeti',
                    '1 Voodoo Doctor',
                    '1 Shattered Sun Cleric',
                    '1 Elven Archer',
                    '1 Shadow Word: Pain',
                    '1 Elven Archer',
                    '1 Shadow Word: Pain',
                    '1 Core Hound',
                    '1 Power Word: Shield',
                ],
            },

            player2: {
                'class': 'Mage',
                deck: [
                    '1 Arcane Explosion',
                    '1 Bloodfen Raptor',
                    '1 Arcane Intellect',
                    '1 Nightblade',
                    '1 Arcane Missiles',
                    '1 Oasis Snapjaw',
                    '1 Nightblade',
                    '1 Bloodfen Raptor',
                    '1 Novice Engineer',
                    '1 Sen\'jin Shieldmasta',
                    '1 River Crocolisk',
                    '1 Arcane Missiles',
                    '1 Sen\'jin Shieldmasta',
                    '1 Wolfrider',
                    '1 Polymorph',
                    '1 Fireball',
                    '1 Raid Leader',
                ],
            }
        });

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
            g.play(g.hand(0, 'Backstab'), g.oBattlefield(2, '1/2 Novice Engineer'), null, '{Dead}');
            g.endTurn();

            // P2-T4
            g.play(g.hand(4, '2/3 Razorfen Hunter'), 2);
            g.battlefield(3, '1/1 Boar');
            g.play(g.battlefield(0, '2/1 Murloc Tidehunter'), g.oHero('0/28'), null, '0/26');
            g.play(g.battlefield(1, '1/1 Murloc Scout'), g.oHero('0/26'), null, '0/25');
            g.endTurn();

            // P1-T5
            g.play(g.hand(0, '4/2 Stormpike Commando'), g.oBattlefield(0, '2/1 Murloc Tidehunter'), 1, null, '{Dead}');
            g.play(g.battlefield(0, '2/4 Gnomish Inventor'), g.oBattlefield(2, '1/1 Boar'), '2/3', '{Dead}');
            g.endTurn();

            // P2-T5
            g.play(g.hand(5, '4/4 Frostwolf Warlord'), 2, '6/6');
            g.play(g.battlefield(1, '2/3 Razorfen Hunter'), g.oBattlefield(1, '4/2 Stormpike Commando'), '{Dead}', '{Dead}');
            g.battlefield(1, '5/5 Frostwolf Warlord');
            g.play(g.battlefield(0, '1/1 Murloc Scout'), g.oHero('0/25'), null, '0/24');
            g.endTurn();

            // P1-T6
            g.play(g.battlefield(0, '2/3 Gnomish Inventor'), g.oBattlefield(0, '1/1 Murloc Scout'), '2/2', '{Dead}');
            g.oHero('0/26');
            g.play(g.hand(0, '4/4 Nightblade'), 1);
            g.oHero('0/23');
            g.endTurn();

            // P2-T6
            g.play(g.hand(3, 'Polymorph'), g.oBattlefield(1, '4/4 Nightblade'), null, null);
            g.oBattlefield(1, '1/1 Sheep');
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
            g.play(g.battlefield(1, '2/1 Gnomish Inventor'), g.oBattlefield(0, '4/4 Frostwolf Warlord'), '{Dead}', '4/2');
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
            g.play(g.battlefield(0, '2/4 Gnomish Inventor'), g.oBattlefield(4, '3/2 Acidic Swamp Ooze'), '2/1', '{Dead}');
            g.oBattlefield(0, '7/6 Frostwolf Warlord');
            g.play(g.hand(0, '2/4 Dragonling Mechanic'), 0);
            g.battlefield(2, '2/1 Mechanical Dragonling');
            g.play(g.hand(0, '2/5 Stormwind Knight'), 0);
            g.play(g.battlefield(0, '2/5 Stormwind Knight'), g.oBattlefield(1, '2/1 Murloc Tidehunter'), '2/3', '{Dead}');
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
            g.play(g.battlefield(2, '1/2 Novice Engineer'), g.oBattlefield(0, '2/2 Stormwind Knight'), '{Dead}', '2/1');
            g.play(g.battlefield(1, '1/1 Murloc Scout'), g.oBattlefield(0, '2/1 Stormwind Knight'), '{Dead}', '{Dead}');
            g.endTurn();

            // P1-T9
            g.play(g.hand(0, 'Sap'), g.oBattlefield(1, '5/5 Frostwolf Warlord'), null, '4/4');
            g.play(g.hand(0, '1/2 Novice Engineer'), 0);
            g.play(g.hand(0, '1/2 Novice Engineer'), 0);
            g.play(g.heroPower('Dagger Mastery'));
            g.play(g.hero('1/5'), g.oHero('0/20'), null, '0/19');
            g.play(g.hand(0, '1/1 Elven Archer'), g.oBattlefield(0, '4/4 Frostwolf Warlord'), null, '4/3');
            g.play(g.battlefield(2, '2/3 Dragonling Mechanic'), g.oBattlefield(0, '4/3 Frostwolf Warlord'), '{Dead}', '4/1');
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
            g.play(g.heroPower('Fireblast'), g.oHero('0/1'), null, '{Dead}');
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

    describe('Noxious #3: Hunter vs Mage', function() {
        var g, tmpCard, tmpCards;

        it('should play the game correctly', function() {
            // P1-T1
            g.endTurn();

            // P2-T1
            g.endTurn();

            // P1-T2
            g.oHero('0/30');
            g.play(g.heroPower('Steady Shot'), null);
            g.oHero('0/28');
            g.endTurn();

            // P2-T2
            g.play(g.hand(5, 'Novice Engineer'), 0);
            g.endTurn();

            // P1-T3
            g.oHero('0/28');
            g.play(g.heroPower('Steady Shot'), null);
            g.oHero('0/26');
            g.play(g.hand(0, 'Arcane Shot'), g.oBattlefield(0, '1/2 Novice Engineer'), '{Dead}', '{Dead}');
            g.endTurn();

            // P2-T3
            g.play(g.hand(0, 'Wolfrider'), 0);
            g.play(g.battlefield(0, '3/1 Wolfrider'), g.oHero('0/30'), '3/1', '0/27');
            g.endTurn();

            // P1-T4
            g.play(g.hand(0, 'Explosive Trap'), null);
            g.oHero('0/26');
            g.play(g.heroPower('Steady Shot'), null);
            g.oHero('0/24');
            g.endTurn();

            // P2-T4
            g.hero('0/24');
            g.play(g.battlefield(0, '3/1 Wolfrider'), g.oHero('0/27'), '{Dead}', '0/27');
            g.hero('0/22');
            g.play(g.hand(1, 'Sen\'jin Shieldmasta'), 0, '{Taunt,ZZZ}');
            g.endTurn();

            // P1-T5
            g.play(g.hand(0, 'Starving Buzzard'), 0, '{EffectTrigger,ZZZ}');
            expect(g.game.getHandCardCount()).to.equal(5);
            g.play(g.hand(0, 'Ironfur Grizzly'), 1, '{Taunt,ZZZ}');
            expect(g.game.getHandCardCount()).to.equal(5);
            g.endTurn();

            // P2-T5
            g.play(g.hand(4, 'Frostbolt'), g.oBattlefield(1, '3/3 Ironfur Grizzly'), '{Dead}', '{Dead}');
            g.play(g.hand(2, 'The Coin'), null);
            g.play(g.hand(1, 'Frostbolt'), g.oBattlefield(0, '2/2 Starving Buzzard'), '{Dead}', '{Dead}');
            g.play(g.battlefield(0, '3/5 Sen\'jin Shieldmasta'), g.oHero('0/27'), '3/5', '0/24');
            g.endTurn();

            // P1-T6
            g.play(g.hand(0, '4/2 Stormpike Commando'), g.oBattlefield(0, '3/5 Sen\'jin Shieldmasta'), 0, '4/2', '3/3');
            g.endTurn();

            // P2-T6
            g.oBattlefield(0, '4/2 Stormpike Commando');
            g.play(g.hand(1, 'Arcane Explosion'), null, '{Dead}');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '4/1 Stormpike Commando'), null, '{Dead}');
            g.play(g.hand(4, 'Murloc Tidehunter'), 1);
            g.battlefield(2, '1/1 Murloc Scout');
            g.play(g.battlefield(0, '3/3 Sen\'jin Shieldmasta'), g.oHero('0/24'), '3/3', '0/21');
            g.endTurn();

            // P1-T7
            g.hero('0/21');
            g.play(g.hand(0, 'Darkscale Healer'), 0);
            g.hero('0/23');
            g.oHero('0/22');
            g.play(g.heroPower('Steady Shot'), null);
            g.oHero('0/20');
            g.endTurn();

            // P2-T7
            g.play(g.hand(0, 'Polymorph'), g.oBattlefield(0, '4/5 Darkscale Healer'), null, null);
            g.oBattlefield(0, '1/1 Sheep');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '1/1 Sheep'), null, '{Dead}');
            g.play(g.battlefield(0, '3/3 Sen\'jin Shieldmasta'), g.oHero('0/23'), '3/3', '0/20');
            g.play(g.battlefield(2, '1/1 Murloc Scout'), g.oHero('0/20'), '1/1', '0/19');
            g.play(g.battlefield(1, '2/1 Murloc Tidehunter'), g.oHero('0/19'), '2/1', '0/17');
            g.endTurn();

            // P1-T8
            g.gm.predictRoll(1);
            g.play(g.hand(0, 'Gelbin Mekkatorque'), 0);
            g.battlefield(1, '0/5 Repair Bot');
            g.play(g.hand(0, 'Youthful Brewmaster'), g.battlefield(0), 2, null, null, 1);
            g.battlefield(0, '0/5 Repair Bot');
            g.endTurn();

            // P2-T8
            // healed by Repair Bot
            g.hero('0/23');
            g.battlefield(0, '3/5');
            g.oHero('0/20');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(1, '3/2 Youthful Brewmaster'), null, '3/1');
            g.play(g.battlefield(2, '1/1 Murloc Scout'), g.oBattlefield(1, '3/1'), '{Dead}', '{Dead}');
            g.play(g.hand(2, 'Frostwolf Warlord'), 2, '6/6');
            g.play(g.battlefield(1, '2/1 Murloc Tidehunter'), g.oBattlefield(0, '0/5 Repair Bot'), '2/1', '0/3');
            g.play(g.battlefield(0, '3/5 Sen\'jin Shieldmasta'), g.oBattlefield(0, '0/3 Repair Bot'), '3/5', '{Dead}');
            g.endTurn();

            // P1-T9
            g.gm.predictRoll(3);
            g.play(g.hand(4, 'Gelbin Mekkatorque'), 0);
            g.battlefield(1, 'Homing Chicken {EffectTrigger,ZZZ}');
            g.play(g.hand(0, '2/2 Scavenging Hyena'), 2, '{EffectTrigger,ZZZ}');
            g.play(g.hand(0, '1/1 Timber Wolf'), 3);
            g.battlefield(2, '3/2');
            g.endTurn();

            // P2-T9
            g.play(g.hand(1, 'Fireball'), g.oBattlefield(0, '6/6 Gelbin Mekkatorque'), null, '{Dead}');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '0/1 Homing Chicken'), null, '{Dead}');
            g.play(g.battlefield(1, '2/1 Murloc Tidehunter'), g.oBattlefield(0, '3/2 Scavenging Hyena'), '{Dead}', '{Dead}');
            g.battlefield(1, '5/5');
            g.play(g.battlefield(0, '3/5 Sen\'jin Shieldmasta'), g.oHero('0/20'), '3/5', '0/17');
            g.play(g.battlefield(1, '5/5 Frostwolf Warlord'), g.oHero('0/17'), '5/5', '0/12');
            g.play(g.hand(2, '3/3 Ironfur Grizzly'), 2, '{Taunt,ZZZ}');
            g.battlefield(1, '6/6');
            g.endTurn();

            // P1-T10
            g.play(g.hand(0, '2/5 Stormwind Knight'), 1, '{Charge}');
            g.play(g.hand(0, '4/4 Frostwolf Warlord'), 2, '6/6 {ZZZ}');
            g.play(g.battlefield(1, '2/5'), g.oBattlefield(0, '3/5'), '2/2', '3/3');
            g.play(g.hand(0, 'Arcane Shot'), g.oBattlefield(0, '3/3'), null, '3/1');
            g.play(g.battlefield(0, '1/1 Timber Wolf'), g.oBattlefield(0, '3/1'), '{Dead}', '{Dead}');
            g.battlefield(1, '5/5');
            g.oBattlefield(0, '5/5');
            g.endTurn();

            // P2-T10
            g.play(g.hand(3, 'Arcane Intellect'), null);
            g.play(g.hand(3, '2/2 Raid Leader'), 2, '2/2');
            g.play(g.hand(3, '2/2 Raid Leader'), 3, '3/2');
            g.play(g.battlefield(1, '5/3 Ironfur Grizzly'), g.oHero('0/12'), '5/3', '0/7');
            g.play(g.battlefield(0, '9/7 Frostwolf Warlord'), g.oHero('0/7'), '9/7', '{Dead}');
        });

        g = setupGameTestEngine({
            startingPlayer: 1,

            player1: {
                'class': 'Hunter',
                deck: [
                    '1 Arcane Shot',
                    '1 Explosive Trap',
                    '1 Starving Buzzard',
                    '1 Ironfur Grizzly',
                    '1 Stormpike Commando',
                    '1 Darkscale Healer',
                    '1 Gelbin Mekkatorque',
                    '1 Youthful Brewmaster',
                    '1 Scavenging Hyena',
                    '1 Timber Wolf',
                    '1 Stormwind Knight',
                    '1 Frostwolf Warlord',
                    '1 Arcane Shot',
                ],
            },

            player2: {
                'class': 'Mage',
                deck: [
                    '1 Wolfrider',
                    '1 Polymorph',
                    '1 Sen\'jin Shieldmasta',
                    '1 Frostbolt',
                    '1 Novice Engineer',
                    '1 Arcane Explosion',
                    '1 Frostbolt',
                    '1 Acidic Swamp Ooze',
                    '1 Fireball',
                    '1 Frostwolf Warlord',
                    '1 Murloc Tidehunter',
                    '1 Acidic Swamp Ooze',
                    '1 Ironfur Grizzly',
                    '1 Ironfur Grizzly',
                    '1 Arcane Intellect',
                    '1 Raid Leader',
                    '1 Raid Leader',
                ],
            }
        });
    });

    describe('Noxious #4: Hunter vs Mage', function() {
        var g, tmpCard, tmpCards;

        it('should play the game correctly', function() {
            // P2-T1
            g.endTurn();

            // P1-T1
            g.play(g.hand(0, '1/1 Timber Wolf'), 0, '{ZZZ}');
            g.endTurn();

            // P2-T2
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '1/1 Timber Wolf'), null, '{Dead}');
            g.endTurn();

            // P1-T2
            g.oHero('0/30');
            g.play(g.heroPower('Steady Shot'), null);
            g.oHero('0/28');
            g.endTurn();

            // P2-T3
            g.play(g.hand(2, '3/3 Ironfur Grizzly'), 0, '{Taunt,ZZZ}');
            g.endTurn();

            // P1-T3
            g.play(g.hand(0, '3/3 Ironfur Grizzly'), 0, '{Taunt,ZZZ}');
            g.endTurn();

            // P2-T4
            g.play(g.hand(0, '3/5 Sen\'jin Shieldmasta'), 1, '{Taunt,ZZZ}');
            g.play(g.battlefield(0, '3/3 Ironfur Grizzly'), g.oBattlefield(0, '3/3 Ironfur Grizzly'), '{Dead}', '{Dead}');
            g.endTurn();

            // P1-T4
            g.play(g.hand(0, '2/7 Oasis Snapjaw'), 0, '{ZZZ}');
            g.endTurn();

            // P2-T5
            g.play(g.hand(3, '4/4 Frostwolf Warlord'), 1, '5/5 {ZZZ}');
            g.play(g.battlefield(0, '3/5 Sen\'jin Shieldmasta'), g.oHero('0/30'), '3/5', '0/27');
            g.endTurn();

            // P1-T5
            g.play(g.battlefield(0, '2/7 Oasis Snapjaw'), g.oBattlefield(0, '3/5 Sen\'jin Shieldmasta'), '2/4', '3/3');
            g.gm.predictRoll(1); // = oBattlefield(0)
            g.oBattlefield(0, '3/3 Sen\'jin Shieldmasta');
            g.gm.predictRoll(1); // = oBattlefield(1), because oBattlefield(0) is already taken
            g.oBattlefield(1, '5/5 Frostwolf Warlord');
            g.play(g.hand(0, 'Multi-Shot'), null);
            g.oBattlefield(0, '4/2 Frostwolf Warlord');
            g.endTurn();

            // P2-T6
            g.play(g.hand(5, '1/2 Novice Engineer'), 1, '{ZZZ}');
            g.battlefield(0, '5/3');
            g.play(g.hand(2, '2/2 Raid Leader'), 2, '{ZZZ}');
            g.battlefield(0, '7/4');
            g.battlefield(1, '2/2');
            g.play(g.battlefield(0, '7/4 Frostwolf Warlord'), g.oBattlefield(0, '2/4 Oasis Snapjaw'), '7/2', '{Dead}');
            g.endTurn();

            // P1-T6
            g.play(g.hand(1, '2/5 Tundra Rhino'), 0, '{Charge}');
            g.play(g.hand(1, '1/1 Timber Wolf'), 1, '{Charge}');
            g.battlefield(0, '3/5');
            g.play(g.hand(1, 'Hunter\'s Mark'), g.oBattlefield(0, '7/2 Frostwolf Warlord'), null, '7/1');
            g.play(g.battlefield(1, '1/1 Timber Wolf'), g.oBattlefield(0, '7/1 Frostwolf Warlord'), '{Dead}', '7/1');
            g.battlefield(0, '2/5');
            g.play(g.battlefield(0, '2/5 Tundra Rhino'), g.oBattlefield(0, '7/1 Frostwolf Warlord'), '{Dead}', '7/1');
            g.endTurn();

            // P2-T7
            g.test.healDamage(1, g.battlefield(0, '7/2')); // Hunter's Mark healed the card...
            g.battlefield(0, '7/3');
            g.play(g.hand(0, '3/2 Acidic Swamp Ooze'), 2, '4/2 {ZZZ}');
            g.play(g.hand(1, '3/2 Acidic Swamp Ooze'), 3, '4/2 {ZZZ}');
            g.play(g.hand(3, 'Frostbolt'), g.oHero('0/27'), null, '0/24 {Frozen}');
            g.play(g.battlefield(0, '9/5 Frostwolf Warlord'), g.oHero('0/24'), '9/5', '0/15');
            g.play(g.battlefield(1, '2/2 Novice Engineer'), g.oHero('0/15'), '2/2', '0/13');
            g.play(g.battlefield(4, '2/2 Raid Leader'), g.oHero('0/13'), '2/2', '0/11');
            g.endTurn();

            // P1-T7
            g.gm.predictRoll(3);
            g.play(g.hand(1, 'Animal Companion'), null);
            g.battlefield(0, '4/2 Huffer {Charge}');
            g.play(g.hand(1, '3/2 Bloodfen Raptor'), 0, '{ZZZ}');
            g.play(g.hand(0, 'The Coin'), null);
            g.play(g.hand(0, '1/4 Silverback Patriarch'), 0, '{Taunt,ZZZ}');
            g.play(g.battlefield(2, '4/2 Huffer'), g.oHero('0/28'), '4/2', '0/24');
            g.endTurn();

            // P2-T8
            g.play(g.hand(2, 'Polymorph'), g.oBattlefield(0, '1/4 Silverback Patriarch {Taunt}'), null, null);
            g.oBattlefield(0, '1/1 Sheep');
            g.play(g.battlefield(0, '9/5 Frostwolf Warlord'), g.oHero('0/11'), '9/5', '0/2');
            g.play(g.battlefield(1, '2/2 Novice Engineer'), g.oHero('0/2'), '2/2', '{Dead}');
        });

        g = setupGameTestEngine({
            startingPlayer: 2,

            player1: {
                'class': 'Hunter',
                deck: [
                    '1 Timber Wolf',
                    '1 Ironfur Grizzly',
                    '1 Oasis Snapjaw',
                    '1 Multi-Shot',
                    '1 Tundra Rhino',
                    '1 Timber Wolf',
                    '1 Hunter\'s Mark',
                    '1 Animal Companion',
                    '1 Bloodfen Raptor',
                    '1 Silverback Patriarch'
                ],
            },

            player2: {
                'class': 'Mage',
                deck: [
                    '1 Sen\'jin Shieldmasta',
                    '1 Acidic Swamp Ooze',
                    '1 Ironfur Grizzly',
                    '1 Arcane Intellect',
                    '1 Raid Leader',
                    '1 Frostwolf Warlord',
                    '1 Acidic Swamp Ooze',
                    '1 Fireball',
                    '1 Novice Engineer',
                    '1 Polymorph',
                    '1 Frostbolt',
                    '1 Arcane Explosion',
                ],
            }
        });
    });

    // Source: http://www.twitch.tv/noxious_hs/b/446722012
    describe('Noxious #5: Shaman vs Mage', function() {
        var g, tmpCard, tmpCards;

        it('should play the game correctly', function() {
            // P2-T1
            g.endTurn();

            // P1-T1
            g.play(g.hand(0, '2/1 Murloc Raider'), 0, '{ZZZ}');
            g.endTurn();

            // P2-T2
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '2/1 Murloc Raider'), null, '{Dead}');
            g.endTurn();

            // P1-T2
            g.play(g.hand(0, '1/1 Stonetusk Boar'), 0, '{Charge}');
            g.play(g.hand(2, 'The Coin'), null);
            g.gm.predictRoll(1);
            g.play(g.heroPower('Totemic Call'), null);
            g.battlefield(1, '0/2 Healing Totem {EffectTrigger,ZZZ}');
            g.play(g.battlefield(0, '1/1 Stonetusk Boar'), g.oHero('0/30'), '1/1', '0/29');
            g.endTurn();

            // P2-T3
            g.play(g.hand(4, '1/2 Novice Engineer'), 0, '{ZZZ}');
            g.endTurn();

            // P1-T3
            g.battlefield(0, '1/1 Stonetusk Boar');
            g.battlefield(1, '0/2 Healing Totem');
            g.play(g.hand(0, '2/2 Raid Leader'), 0, '{ZZZ}');
            g.battlefield(1, '2/1 Stonetusk Boar');
            g.battlefield(2, '1/2 Healing Totem');
            g.play(g.battlefield(1, '2/1 Stonetusk Boar'), g.oHero('0/29'), '2/1', '0/27');
            g.play(g.battlefield(2, '1/2 Healing Totem'), g.oHero('0/27'), '1/2', '0/26');
            g.endTurn();

            // P2-T4
            g.play(g.hand(2, 'Arcane Explosion'), null);
            g.oBattlefield(0, '2/1 Raid Leader');
            g.oBattlefield(1, '1/1 Healing Totem');
            g.play(g.battlefield(0, '1/2 Novice Engineer'), g.oBattlefield(1, '1/1 Healing Totem'), '1/1', '{Dead}');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '2/1 Raid Leader'), null, '{Dead}');
            g.endTurn();

            // P1-T4
            g.play(g.hand(0, 'Frost Shock'), g.oBattlefield(0, '1/1 Novice Engineer'), null, '{Dead}');
            g.play(g.hand(0, '2/1 Voodoo Doctor'), g.hero('0/30'), '{ZZZ}', '0/30');
            g.gm.predictRoll(4);
            g.play(g.heroPower('Totemic Call'), null);
            g.battlefield(1, '0/2 Wrath of Air Totem {ZZZ}');
            g.endTurn();

            // P2-T5
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '2/1 Voodoo Doctor'), null, '{Dead}');
            g.play(g.hand(5, '3/3 Ironfur Grizzly'), 0, '{Taunt,ZZZ}');
            g.endTurn();

            // P1-T5
            g.gm.predictRoll(1);
            g.play(g.heroPower('Totemic Call'), null);
            g.battlefield(1, '0/2 Healing Totem {EffectTrigger,ZZZ}');
            g.endTurn();

            // P2-T6
            g.play(g.hand(1, '1/2 Novice Engineer'), 1, '{ZZZ}');
            g.play(g.hand(2, '3/5 Sen\'jin Shieldmasta'), 2, '{Taunt,ZZZ}');
            g.play(g.battlefield(0, '3/3 Ironfur Grizzly'), g.oBattlefield(1, '0/2 Healing Totem'), '3/3', '{Dead}');
            g.endTurn();

            // P1-T6
            g.play(g.hand(0, '3/5 Sen\'jin Shieldmasta'), 0, '{Taunt,ZZZ}');
            g.play(g.hand(0, 'Frost Shock'), g.oBattlefield(2, '3/5 Sen\'jin Shieldmasta'), null, '3/3 {Frozen,Taunt}');
            g.endTurn();

            // P2-T7
            g.play(g.hand(5, 'Fireball'), g.oBattlefield(0, '3/5 Sen\'jin Shieldmasta'), null, '{Dead}');
            g.play(g.hand(2, '2/2 Raid Leader'), 3, '{ZZZ}');
            g.battlefield(0, '4/3 Ironfur Grizzly');
            g.battlefield(1, '2/2 Novice Engineer');
            g.battlefield(2, '4/3 Sen\'jin Shieldmasta');
            g.play(g.battlefield(0, '4/3 Ironfur Grizzly'), g.oHero('0/30'), '4/3', '0/26');
            g.play(g.battlefield(1, '2/2 Novice Engineer'), g.oBattlefield(0, '0/2 Wrath of Air Totem'), '2/2', '{Dead}');
            g.endTurn();

            // P1-T7
            g.play(g.hand(0, '5/2 Reckless Rocketeer'), 0, '{Charge}');
            g.play(g.hand(0, 'Rockbiter Weapon'), g.battlefield(0, '5/2 Reckless Rocketeer'), null, '8/2');
            g.play(g.battlefield(0, '8/2 Reckless Rocketeer'), g.oBattlefield(0, '4/3 Ironfur Grizzly'), '{Dead}', '{Dead}');
            g.endTurn();

            // P2-T8
            g.play(g.hand(3, '4/4 Frostwolf Warlord'), 3, '8/7');
            g.play(g.hand(2, 'Frostbolt'), g.oHero('0/26'), null, '0/23 {Frozen}');
            g.play(g.battlefield(1, '4/3 Sen\'jin Shieldmasta'), g.oHero('0/23'), '4/3', '0/19');
            g.play(g.battlefield(0, '2/2 Novice Engineer'), g.oHero('0/19'), '2/2', '0/17');
            g.play(g.battlefield(2, '2/2 Raid Leader'), g.oHero('0/17'), '2/2', '0/15');
            g.endTurn();

            // P1-T8
            g.play(g.hand(0, '5/4 Booty Bay Bodyguard'), 0, '5/4 {Taunt,ZZZ}');
            g.play(g.hand(0, 'Hex'), g.oBattlefield(3, '8/7 Frostwolf Warlord'), '{Dead}', '{Dead}');
            g.oBattlefield(3, '1/1 Frog {Taunt,ZZZ}');
            g.endTurn();

            // P2-T9
            expect(g.game.getHandCardCount()).to.equal(5);
            g.play(g.hand(2, 'Arcane Intellect'), null);
            expect(g.game.getHandCardCount()).to.equal(6);
            g.play(g.hand(1, 'Frostbolt'), g.oBattlefield(0, '5/4 Booty Bay Bodyguard'), null, '5/1 {Frozen,Taunt}');
            g.play(g.battlefield(3, '1/1 Frog'), g.oBattlefield(0, '5/1 Booty Bay Bodyguard'), '{Dead}', '{Dead}');
            g.play(g.hand(4, '2/1 Murloc Tidehunter'), 3, '3/1');
            g.battlefield(4, '2/1 Murloc Scout');
            g.play(g.battlefield(1, '4/3 Sen\'jin Shieldmasta'), g.oHero('0/15'), '4/3', '0/11');
            g.play(g.battlefield(2, '2/2 Raid Leader'), g.oHero('0/11'), '2/2', '0/9');
            g.play(g.battlefield(0, '2/2 Novice Engineer'), g.oHero('0/9'), '2/2', '0/7');
            g.endTurn();

            // P1-T9
            g.play(g.hand(0, '2/1 Voodoo Doctor'), g.hero('0/7'), 0, '2/1 {ZZZ}', '0/9');
            g.gm.predictRoll(3);
            g.play(g.heroPower('Totemic Call'), null);
            g.battlefield(1, '0/2 Stoneclaw Totem {Taunt,ZZZ}');
            g.endTurn();

            // P2-T10
            g.play(g.hand(2, '4/4 Frostwolf Warlord'), 5, '10/9 {ZZZ}');
            g.play(g.battlefield(4, '2/1 Murloc Scout'), g.oBattlefield(1, '0/2 Stoneclaw Totem'), '2/1', '{Dead}');
            g.play(g.battlefield(3, '3/1 Murloc Tidehunter'), g.oHero('0/9'), '3/1', '0/6');
            g.play(g.battlefield(1, '4/3 Sen\'jin Shieldmasta'), g.oHero('0/6'), '4/3', '0/2');
            g.play(g.battlefield(2, '2/2 Raid Leader'), g.oHero('0/2'), '2/2', '{Dead}');
        });

        g = setupGameTestEngine({
            startingPlayer: 2,

            player1: {
                'class': 'Shaman',
                deck: [
                    '1 Murloc Raider',
                    '1 Stonetusk Boar',
                    '1 Raid Leader',
                    '1 Frost Shock',
                    '1 Voodoo Doctor',
                    '1 Sen\'jin Shieldmasta',
                    '1 Frost Shock',
                    '1 Reckless Rocketeer',
                    '1 Rockbiter Weapon',
                    '1 Booty Bay Bodyguard',
                    '1 Hex',
                    '1 Voodoo Doctor',
                ],
            },

            player2: {
                'class': 'Mage',
                deck: [
                    '1 Arcane Intellect',
                    '1 Novice Engineer',
                    '1 Arcane Explosion',
                    '1 Frostbolt',
                    '1 Novice Engineer',
                    '1 Sen\'jin Shieldmasta',
                    '1 Raid Leader',
                    '1 Ironfur Grizzly',
                    '1 Frostbolt',
                    '1 Frostwolf Warlord',
                    '1 Fireball',
                    '1 Arcane Intellect',
                    '1 Sen\'jin Shieldmasta',
                    '1 Frostwolf Warlord',
                    '1 Acidic Swamp Ooze',
                    '1 Murloc Tidehunter',
                    '1 Razorfen Hunter',
                ],
            }
        });
    });

    describe('Noxious #6: Mage vs Mage', function() {
        var g, tmpCard, tmpCards;

        it('should play the game correctly', function() {
            // P2-T1
            g.endTurn();

            // P1-T1
            g.endTurn();

            // P2-T2
            g.play(g.heroPower('Fireblast'), g.oHero('0/30'), null, '0/29');
            g.endTurn();

            // P1-T2
            g.play(g.hand(0, '1/2 Goldshire Footman'), 0, '{Taunt,ZZZ}');
            g.endTurn();

            // P2-T3
            g.gm.predictRoll(2, 1, 1);
            g.play(g.hand(1, 'Arcane Missiles'), null, '{Dead}');
            g.oHero('0/27');
            g.oBattlefield(0, '1/1 Goldshire Footman');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '1/1 Goldshire Footman'), null, '{Dead}');
            g.endTurn();

            // P1-T3
            expect(g.game.getHandCardCount()).to.equal(7);
            g.play(g.hand(0, 'Arcane Intellect'), null, '{Dead}');
            expect(g.game.getHandCardCount()).to.equal(8);
            g.endTurn();

            // P2-T4
            g.play(g.hand(0, '2/3 Razorfen Hunter'), 0, '{ZZZ}');
            g.battlefield(1, '1/1 Boar {ZZZ}');
            g.endTurn();

            // P1-T4
            g.play(g.hand(0, 'Mirror Image'), null, '{Dead}');
            g.battlefield(0, '0/1 Mirror Image {Taunt,ZZZ}');
            g.battlefield(1, '0/1 Mirror Image {Taunt,ZZZ}');
            g.play(g.hand(0, '3/3 Shattered Sun Cleric'), g.battlefield(1, '0/1 Mirror Image'), '{ZZZ}', '1/2');
            g.endTurn();

            // P2-T5
            g.play(g.hand(5, 'Frostbolt'), g.oBattlefield(2, '3/3 Shattered Sun Cleric'), '{Dead}', '{Dead}');
            g.play(g.battlefield(0, '2/3 Razorfen Hunter'), g.oBattlefield(1, '1/2 Mirror Image'), '2/2', '{Dead}');
            g.play(g.battlefield(1, '1/1 Boar'), g.oBattlefield(0, '0/1 Mirror Image'), '1/1', '{Dead}');
            g.play(g.heroPower('Fireblast'), g.oHero('0/27'), null, '0/26');
            g.endTurn();

            // P1-T5
            g.play(g.hand(1, '1/4 Silverback Patriarch'), 0, '{Taunt,ZZZ}');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(1, '1/1 Boar'), null, '{Dead}');
            g.endTurn();

            // P2-T6
            g.play(g.hand(2, '2/2 Raid Leader'), 1, '{ZZZ}');
            g.battlefield(0, '3/2 Razorfen Hunter');
            g.play(g.battlefield(0, '3/2 Razorfen Hunter'), g.oBattlefield(0, '1/4 Silverback Patriarch'), '3/1', '1/1');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '1/1 Silverback Patriarch'), null, '{Dead}');
            g.endTurn();

            // P1-T6
            g.play(g.hand(1, '6/5 Lord of the Arena'), 0, '{Taunt,ZZZ}');
            g.endTurn();

            // P2-T7
            g.play(g.hand(4, 'Polymorph'), g.oBattlefield(0, '6/5 Lord of the Arena'), '{Dead}', null);
            g.oBattlefield(0, '1/1 Sheep');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '1/1 Sheep'), null, '{Dead}');
            g.play(g.battlefield(0, '3/1 Razorfen Hunter'), g.oHero('0/26'), '3/1', '0/23');
            g.play(g.battlefield(1, '2/2 Raid Leader'), g.oHero('0/23'), '2/2', '0/21');
            g.endTurn();

            // P1-T7
            g.play(g.hand(1, 'Arcane Explosion'), null);
            g.oBattlefield(0, '2/1 Raid Leader');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '2/1 Raid Leader'), null, '{Dead}');
            g.play(g.hand(0, 'The Coin'), null);
            g.play(g.hand(0, 'Fireball'), g.oHero('0/30'), '{Dead}', '0/24');
            g.endTurn();

            // P2-T8
            g.play(g.hand(5, '3/3 Ironfur Grizzly'), 0, '{Taunt,ZZZ}');
            g.play(g.hand(1, '3/3 Ironfur Grizzly'), 0, '{Taunt,ZZZ}');
            g.play(g.heroPower('Fireblast'), g.oHero('0/21'), null, '0/20');
            g.endTurn();

            // P1-T8
            g.play(g.hand(0, 'Frostbolt'), g.oBattlefield(0, '3/3 Ironfur Grizzly'), '{Dead}', '{Dead}');
            g.oBattlefield(0, '3/3 Ironfur Grizzly');
            g.play(g.hand(0, 'Arcane Explosion'), null, '{Dead}');
            g.oBattlefield(0, '3/2 Ironfur Grizzly');
            g.gm.predictRoll(1, 2, 1);
            g.play(g.hand(0, 'Arcane Missiles'), null, '{Dead}');
            g.oHero('0/22');
            g.oBattlefield(0, '3/1');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '3/1 Ironfur Grizzly'), null, '{Dead}');
            g.endTurn();

            // P2-T9
            expect(g.game.getHandCardCount()).to.equal(5);
            g.play(g.hand(2, 'Arcane Intellect'), null);
            expect(g.game.getHandCardCount()).to.equal(6);
            g.play(g.hand(3, '2/1 Murloc Tidehunter'), 0, '{ZZZ}');
            g.battlefield(1, '1/1 Murloc Scout {ZZZ}');
            g.play(g.hand(3, '2/1 Murloc Tidehunter'), 2, '{ZZZ}');
            g.battlefield(3, '1/1 Murloc Scout {ZZZ}');
            g.play(g.heroPower('Fireblast'), g.oHero('0/20'), null, '0/19');
            g.endTurn();

            // P1-T9
            expect(g.game.getHandCardCount()).to.equal(4);
            g.play(g.hand(0, 'Arcane Intellect'), null);
            expect(g.game.getHandCardCount()).to.equal(5);
            g.play(g.hand(0, '1/2 Goldshire Footman'), 0, '{Taunt,ZZZ}');
            g.play(g.hand(0, '2/1 Young Priestess'), 1, '{EffectTrigger,ZZZ}');
            g.play(g.hand(0, '2/2 Raid Leader'), 0, '{ZZZ}');
            g.battlefield(1, '2/2 Goldshire Footman');
            g.battlefield(2, '3/1 Young Priestess');
            g.gm.predictRoll(2);
            g.endTurn();
            g.oBattlefield(1, '2/3 Goldshire Footman');

            // P2-T10
            g.play(g.hand(2, 'Cone of Cold'), g.oBattlefield(1, '2/3 Goldshire Footman'), '{Dead}', '2/2 {Frozen,Taunt}');
            g.oBattlefield(0, '2/1 {Frozen}');
            g.oBattlefield(2, null);
            g.play(g.hand(2, 'Arcane Explosion'), null, '{Dead}');
            g.oBattlefield(0, '1/1 Goldshire Footman');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '1/1 Goldshire Footman'), null, '{Dead}');
            g.play(g.hand(2, '2/2 Raid Leader'), 4, '{ZZZ}');
            g.battlefield(0, '3/1 Murloc Tidehunter');
            g.battlefield(1, '2/1 Murloc Scout');
            g.battlefield(2, '3/1 Murloc Tidehunter');
            g.battlefield(3, '2/1 Murloc Scout');
            g.play(g.battlefield(3, '2/1 Murloc Scout'), g.oHero('0/19'), '2/1', '0/17');
            g.play(g.battlefield(2, '3/1 Murloc Tidehunter'), g.oHero('0/17'), '3/1', '0/14');
            g.play(g.battlefield(0, '3/1 Murloc Tidehunter'), g.oHero('0/14'), '3/1', '0/11');
            g.play(g.battlefield(1, '2/1 Murloc Scout'), g.oHero('0/11'), '2/1', '0/9');
            g.endTurn();

            // P1-T10
            g.gm.predictRoll(3, 4, 2);
            g.play(g.hand(0, 'Arcane Missiles'), null, '{Dead}');
            g.oBattlefield(0, '2/1 Murloc Scout');
            g.oBattlefield(1, '2/2 Raid Leader');
            g.play(g.hand(0, 'Polymorph'), g.oBattlefield(1, '2/2 Raid Leader'), '{Dead}', '{Dead}');
            g.oBattlefield(1, '1/1 Sheep');
            g.oBattlefield(0, '1/1 Murloc Scout');
            g.play(g.heroPower('Fireblast'), g.oBattlefield(0, '1/1 Murloc Scout'), null, '{Dead}');
            g.endTurn();

            // P2-T11
            expect(g.game.getHandCardCount()).to.equal(3);
            g.play(g.hand(0, 'Arcane Intellect'), null, '{Dead}');
            expect(g.game.getHandCardCount()).to.equal(4);
            g.play(g.hand(2, '3/1 Wolfrider'), 1, '{Charge}');
            g.play(g.battlefield(1, '3/1 Wolfrider'), g.oHero('0/9'), '3/1', '0/6');
            g.play(g.hand(2, 'Fireball'), g.oHero('0/6'), '{Dead}', '{Dead}');
        });

        g = setupGameTestEngine({
            startingPlayer: 2,

            player1: {
                'class': 'Mage',
                deck: [
                    '1 Goldshire Footman',
                    '1 Arcane Intellect',
                    '1 Mirror Image',
                    '1 Shattered Sun Cleric',
                    '1 Silverback Patriarch',
                    '1 Lord of the Arena',
                    '1 Arcane Explosion',
                    '1 Fireball',
                    '1 Frostbolt',
                    '1 Arcane Explosion',
                    '1 Arcane Missiles',
                    '1 Arcane Intellect',
                    '1 Goldshire Footman',
                    '1 Young Priestess',
                    '1 Raid Leader',
                    '1 Arcane Missiles',
                    '1 Polymorph',

                ],
            },

            player2: {
                'class': 'Mage',
                deck: [
                    '1 Razorfen Hunter',
                    '1 Arcane Missiles',
                    '1 Arcane Intellect',
                    '1 Ironfur Grizzly',
                    '1 Raid Leader',
                    '1 Polymorph',
                    '1 Arcane Intellect',
                    '1 Frostbolt',
                    '1 Polymorph',
                    '1 Cone of Cold',
                    '1 Ironfur Grizzly',
                    '1 Murloc Tidehunter',
                    '1 Murloc Tidehunter',
                    '1 Arcane Explosion',
                    '1 Raid Leader',
                    '1 Acidic Swamp Ooze',
                    '1 Wolfrider',
                    '1 Fireball',
                ],
            }
        });
    });

    // http://www.twitch.tv/ellohime/b/459752803?t=403m46s
    describe('Ellohime Arena Match', function() {
        var g, tmpCard, tmpCards;

        it('should play the game correctly', function() {
            // P2-T1
            g.endTurn();

            // P1-T1
            g.endTurn();

            // P2-T2
            g.play(g.hand(2, '2/2 Pint-Sized Summoner'), 0, '2/2 {ZZZ}');
            g.endTurn();

            // P1-T2
            g.hero('0/30 [0]');
            g.play(g.hand(0, 'Claw'), null, '{Dead}');
            g.hero('2/30 [2]');
            g.play(g.hero('2/30 [2]'), g.oBattlefield(0, '2/2 Pint-Sized Summoner'), '2/30 [0]', '{Dead}');
            g.endTurn();
            g.oHero('0/30');

            // P2-T3
            g.play(g.hand(3, '1/4 Demolisher'), 0, '1/4 {EffectTrigger,ZZZ}');
            g.endTurn();

            // P1-T3
            g.play(g.hand(0, '2/3 Razorfen Hunter'), 0, '2/3 {ZZZ}');
            g.battlefield(1, '1/1 Boar {ZZZ}');
            g.gm.predictRoll(1);  // Demolisher effect => Hero
            g.hero('0/30');
            g.endTurn();

            // P2-T4
            g.oHero('0/28');
            g.play(g.hand(1, '3/3 Raging Worgen'), 1, '3/3 {ZZZ}');
            g.play(g.battlefield(0, '1/4 Demolisher'), g.oBattlefield(1, '1/1 Boar'), '1/3', '{Dead}');
            g.endTurn();

            // P1-T4
            g.play(g.hand(0, '3/1 Wolfrider'), 1, '3/1 {Charge}');
            g.play(g.battlefield(1, '3/1 Wolfrider'), g.oBattlefield(1, '3/3 Raging Worgen'), '{Dead}', '{Dead}');
            g.play(g.battlefield(0, '2/3 Razorfen Hunter'), g.oHero('0/30'), '2/3', '0/28');
            g.gm.predictRoll(2); // Demolisher effect => battlefield #0
            g.battlefield(0, '2/3');
            g.endTurn();

            // P2-T5
            g.oBattlefield(0, '2/1');
            g.play(g.hand(4, '4/2 Stormpike Commando'), g.oBattlefield(0, '2/1 Razorfen Hunter'), 1, '4/2 {ZZZ}', '{Dead}');
            g.play(g.battlefield(0, '1/3 Demolisher'), g.oHero('0/28'), '1/3', '0/27');
            g.endTurn();

            // P1-T5
            g.playChooseOne(g.hand(0, '4/4 Druid of the Claw'), 0, 0, '{Dead,ZZZ}');
            g.battlefield(0, '4/4 {Charge}');
            g.play(g.battlefield(0, '4/4 Druid of the Claw'), g.oBattlefield(0, '1/3 Demolisher'), '4/3', '{Dead}');
            g.endTurn();

            // P2-T6
            g.play(g.hand(0, '4/4 Silver Hand Knight'), 1, '4/4 {ZZZ}');
            g.battlefield(2, '2/2 Squire');
            g.play(g.battlefield(0, '4/2 Stormpike Commando'), g.oBattlefield(0, '4/3 Druid of the Claw'), '{Dead}', '{Dead}');
            g.endTurn();

            // P1-T6
            g.playChooseOne(g.hand(1, '4/4 Druid of the Claw'), 1, 0, '{Dead,ZZZ}');
            g.battlefield(0, '4/6 {Taunt,ZZZ}');
            g.endTurn();

            // P2-T7
            g.play(g.hand(4, '2/3 Tauren Warrior'), 2, '2/3 {Taunt,ZZZ}');
            g.play(g.hand(2, '5/1 Magma Rager'), 3, '5/1 {ZZZ}');
            g.play(g.battlefield(0, '4/4 Silver Hand Knight'), g.oBattlefield(0, '4/6 Druid of the Claw'), '{Dead}', '4/2');
            g.play(g.battlefield(0, '2/2 Squire'), g.oBattlefield(0, '4/2 Druid of the Claw'), '{Dead}', '{Dead}');
            g.endTurn();

            // P1-T7
            g.playChooseOne(g.hand(1, '4/4 Druid of the Claw'), 1, 0, '{Dead,ZZZ}');
            g.battlefield(0, '4/6 {Taunt,ZZZ}');
            g.hero('0/27 [0]');
            g.play(g.heroPower('Shapeshift'), null);
            g.hero('1/27 [1]');
            g.endTurn();

            // P2-T8
            expect(g.game.getHandCardCount()).to.equal(4);
            g.oBattlefield(0, '4/6 {Taunt}');
            g.play(g.hand(3, 'Mass Dispel'), null);
            expect(g.game.getHandCardCount()).to.equal(4);
            g.oBattlefield(0, '4/6 {Silenced}');
            g.play(g.hand(1, '1/3 Northshire Cleric'), 2, '1/3 {EffectTrigger,ZZZ}');
            g.play(g.battlefield(1, '5/1 Magma Rager'), g.oHero('0/27 [1]'), '5/1', '0/23 [0]');
            g.play(g.battlefield(0, '2/3 Tauren Warrior'), g.oHero('0/23'), '2/3', '0/21');
            g.play(g.heroPower('Lesser Heal'), g.hero('0/28'), null, '0/30');
            g.endTurn();

            // P1-T8
            g.play(g.battlefield(0, '4/6 Druid of the Claw'), g.oBattlefield(0, '2/3 Tauren Warrior'), '4/4', '{Dead}');
            g.hero('0/21 [0]');
            g.play(g.heroPower('Shapeshift'), null);
            g.hero('1/21 [1]');
            g.play(g.hero('1/21 [1]'), g.oBattlefield(0, '5/1 Magma Rager'), '1/17 [0]', '{Dead}');
            g.playChooseOne(g.hand(1, 'Mark of Nature'), 1, g.battlefield(0, '4/4 {Silenced}'), '{Dead}', '4/8 {Silenced,Taunt}');
            g.play(g.hand(1, '3/3 Earthen Ring Farseer'), g.hero('1/17'), 0, '3/3 {ZZZ}', '1/20');
            g.endTurn();

            // P2-T9
            g.play(g.hand(3, '2/1 Worgen Infiltrator'), 0, '2/1 {Stealth,ZZZ}');
            g.play(g.hand(2, '5/4 Booty Bay Bodyguard'), 2, '5/4 {Taunt,ZZZ}');
            g.play(g.hand(1, '3/2 Youthful Brewmaster'), g.battlefield(0, '2/1 Worgen Infiltrator'), 3, '3/2', null, 2);
            g.play(g.hand(1, '2/1 Worgen Infiltrator'), 3, '2/1 {Stealth,ZZZ}');
            g.endTurn();

            // P1-T9
            g.gm.predictRoll(2); // 2 = oBattlefield(1)
            g.play(g.hand(1, '3/3 Mind Control Tech'), 0, '3/3 {ZZZ}');
            g.battlefield(3, '5/4 Booty Bay Bodyguard {Taunt,ZZZ}');
            g.play(g.battlefield(2, '4/8 Druid of the Claw'), g.oHero('0/30'), '4/8', '0/26');
            g.play(g.battlefield(1, '3/3 Earthen Ring Farseer'), g.oHero('0/26'), '3/3', '0/23');
            g.play(g.hand(1, '6/7 Boulderfist Ogre'), 0, '6/7 {ZZZ}');
            g.endTurn();

            // P2-T10
            g.play(g.hand(0, '12/12 Deathwing'), 0, '12/12 {ZZZ}');
            g.oBattlefield(0, null);
            g.battlefield(1, null);
            g.hand(0, null);
            g.endTurn();

            // P1-T10
            g.play(g.heroPower('Shapeshift'), null);
            g.play(g.hand(1, '3/3 Faceless Manipulator'), g.oBattlefield(0, '12/12 Deathwing'), 0, '{Dead}');
            g.battlefield(0, '12/12 Deathwing');
            g.play(g.hero('1/20 [1]'), g.oHero('0/23'), '1/20 [1]', '0/22');
            g.endTurn();

            // P2-T11
            g.play(g.hand(0, '4/5 Windfury Harpy'), 1, '4/5 {Windfury,ZZZ}');
            g.play(g.heroPower('Lesser Heal'), g.hero('0/22'), null, '0/24');
            g.play(g.battlefield(0, '12/12 Deathwing'), g.oHero('0/20 [1]'), '12/12', '0/9 [0]');
            g.endTurn();

            // P1-T11
            g.play(g.hand(1, '3/3 Faceless Manipulator'), g.oBattlefield(0, '12/12 Deathwing'), 0, '{Dead}');
            g.battlefield(0, '12/12 Deathwing');
            g.play(g.battlefield(1, '12/12 Deathwing'), g.oBattlefield(0, '12/12 Deathwing'), '{Dead}', '{Dead}');
            g.hero('0/9 [0]');
            g.play(g.heroPower('Shapeshift'), null);
            g.hero('1/9 [1]');
            g.play(g.hand(0, 'The Coin'), null);
            g.play(g.hand(0, '4/4 Dark Iron Dwarf'), g.battlefield(0, '12/12 Deathwing'), 1, '4/4 {ZZZ}', '14/12');
            g.endTurn();

            // P2-T12
            g.play(g.hand(0, '0/4 Lightspawn'), 1, '4/4 {ZZZ}');
            g.play(g.heroPower('Lesser Heal'), g.hero('0/24'), null, '0/26');
            g.play(g.battlefield(0, '4/5 Windfury Harpy'), g.oHero('0/9 [1]'), '4/5', '0/6 [0]');
            g.play(g.battlefield(0, '4/5 Windfury Harpy'), g.oHero('0/6'), '4/5', '0/2');
            g.endTurn();

            // P1-T12
            g.playChooseOne(g.hand(0, '5/5 Ancient of Lore'), 1, g.hero('0/2'), 0, '5/5 {ZZZ}', '0/10');
            g.play(g.battlefield(2, '4/4 Dark Iron Dwarf'), g.oBattlefield(1, '4/4 Lightspawn'), '{Dead}', '{Dead}');
            g.play(g.battlefield(1, '14/12 Deathwing'), g.oBattlefield(0, '4/5 Windfury Harpy'), '14/8', '{Dead}');
            g.play(g.heroPower('Shapeshift'));
            g.play(g.hero('1/10 [1]'), g.oHero('0/26'), '1/10 [1]', '0/25');
            g.endTurn();

            // P2-T13
            g.play(g.hand(0, 'Mind Control'), g.oBattlefield(1, '14/8 Deathwing'), '{Dead}', '14/8 {ZZZ}');
            g.play(g.heroPower('Lesser Heal'), g.battlefield(0, '14/8 Deathwing'), null, '14/10');
            g.endTurn();

            // P1-T13
            g.play(g.hand(0, '8/8 Ironbark Protector'), 1, '8/8 {Taunt,ZZZ}');
            g.play(g.battlefield(0, '5/5 Ancient of Lore'), g.oHero('0/25'), '5/5', '0/20');
            g.play(g.heroPower('Shapeshift'), null);
            g.play(g.hero('1/10 [2]'), g.oHero('0/20'), '1/10 [2]', '0/19');
            g.endTurn();

            // P2-T14
            g.play(g.hand(0, '1/3 Northshire Cleric'), 1, '1/3 {EffectTrigger,ZZZ}');
            expect(g.game.getHandCardCount()).to.equal(0);
            g.play(g.heroPower('Lesser Heal'), g.battlefield(0, '14/10 Deathwing'), null, '14/12');
            expect(g.game.getHandCardCount()).to.equal(1);
            g.play(g.hand(0, 'Divine Spirit'), g.battlefield(0, '14/12 Deathwing'), '{Dead}', '14/24');
            g.play(g.battlefield(0, '14/24 Deathwing'), g.oBattlefield(1, '8/8 Ironbark Protector'), '14/16', '{Dead}');
            g.endTurn();

            // P1-T14
            g.playChooseOne(g.hand(0, '2/4 Keeper of the Grove'), 1, g.oBattlefield(0, '14/16 Deathwing'), 1, '2/4', '12/12');
            g.hero('0/10 [2]');
            g.play(g.heroPower('Shapeshift'), null);
            g.hero('1/10 [3]');
            g.play(g.battlefield(0, '5/5 Ancient of Lore'), g.oBattlefield(1, '1/3 Northshire Cleric'), '5/4', '{Dead}');
            g.play(g.hand(0, '5/4 Ancient Brewmaster'), g.battlefield(0, '5/4 Ancient of Lore'), 0, '5/4', '5/5');
            g.play(g.hero('1/10 [3]'), g.oHero('0/19'), '1/10 [3]', '0/18');
            g.endTurn();

            // P2-T15
            g.play(g.battlefield(0, '12/12 Deathwing'), g.oHero('0/10 [3]'), '12/12', '0/1 [0]');
            g.play(g.hand(0, 'Holy Nova'), null);
            g.oHero(null);
        });

        g = setupGameTestEngine({
            startingPlayer: 2,

            player1: {
                'class': 'Druid',
                deck: [
                    '1 Claw',
                    '1 Razorfen Hunter',
                    '1 Wolfrider',
                    '1 Druid of the Claw',
                    '1 Druid of the Claw',
                    '1 Druid of the Claw',
                    '1 Mark of Nature',
                    '1 Earthen Ring Farseer',
                    '1 Mind Control Tech',
                    '1 Boulderfist Ogre',
                    '1 Faceless Manipulator',
                    '1 Faceless Manipulator',
                    '1 Dark Iron Dwarf',
                    '1 Ancient of Lore',
                    '1 Ironbark Protector',
                    '1 Keeper of the Grove',
                    '1 Ancient Brewmaster'
                ],
            },

            player2: {
                'class': 'Priest',
                deck: [
                    '1 Silver Hand Knight',
                    '1 Raging Worgen',
                    '1 Pint-Sized Summoner',
                    '1 Deathwing',
                    '1 Demolisher',
                    '1 Northshire Cleric',
                    '1 Magma Rager',
                    '1 Stormpike Commando',
                    '1 Youthful Brewmaster',
                    '1 Tauren Warrior',
                    '1 Mass Dispel',
                    '1 Booty Bay Bodyguard',
                    '1 Worgen Infiltrator',
                    '1 Silence',
                    '1 Windfury Harpy',
                    '1 Lightspawn',
                    '1 Mind Control',
                    '1 Northshire Cleric',
                    '1 Divine Spirit',
                    '1 Holy Nova'
                ],
            }
        });
    });

    // describe('Game Title', function() {
    //     var g, tmpCard, tmpCards;

    //     it('should play the game correctly', function() {

    //         g.oHero('{Dead}');
    //     });

    //     g = setupGameTestEngine({
    //         startingPlayer: 1,

    //         player1: {
    //             'class': '???',
    //             deck: [
    //             ],
    //         },

    //         player2: {
    //             'class': '???',
    //             deck: [
    //             ],
    //         }
    //     });
    // });
});
