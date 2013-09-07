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

    xit('should solve puzzle #1', function() {
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
            g.play(g.hand(3, 'Polymorph'), g.oBattlefield(0, '9/5 Core Hound'), null, '1/1 Sheep');
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

});
