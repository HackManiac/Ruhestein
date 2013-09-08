/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/5 Repair Bot; At the end of your turn, restore 3 Health to all characters.

describe('RepairBot439', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Malygos',
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Gelbin Mekkatorque'
                ],
                playCards: 1
            }
        });

        g.test.dealDamage(10, g.hero('0/30'), '0/20');
        g.test.dealDamage(10, g.battlefield(0, '4/12'), '4/2');
        g.test.dealDamage(10, g.oHero('0/30'), '0/20');
        g.test.dealDamage(10, g.oBattlefield(0, '4/12'), '4/2');

        g.gm.predictRoll(1);
        g.play(g.hand(0, 'Gelbin Mekkatorque'), 1, '{ZZZ}');
        g.battlefield(2, '0/5 Repair Bot');

        g.endTurn();

        g.hero('0/23');
        g.battlefield(0, '4/5');
        g.oHero('0/23');
        g.oBattlefield(0, '4/5');

        g.endTurn();

        g.hero('0/23');
        g.battlefield(0, '4/5');
        g.oHero('0/23');
        g.oBattlefield(0, '4/5');

        g.endTurn();

        g.hero('0/26');
        g.battlefield(0, '4/8');
        g.oHero('0/26');
        g.oBattlefield(0, '4/8');

        g.endTurn();

        g.hero('0/26');
        g.battlefield(0, '4/8');
        g.oHero('0/26');
        g.oBattlefield(0, '4/8');

        g.test.kill(g.battlefield(2, 'Repair Bot'));

        g.endTurn();

        g.hero('0/26');
        g.battlefield(0, '4/8');
        g.oHero('0/26');
        g.oBattlefield(0, '4/8');
    });

});
