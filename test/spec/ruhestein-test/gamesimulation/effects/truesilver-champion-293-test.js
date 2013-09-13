/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From weapon card: (4) 4/2 Truesilver Champion; Whenever your hero attacks, restore 2 Health to it.

describe('TruesilverChampion293', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Wisp'
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Truesilver Champion'
                ],
            }
        });

        g.test.dealDamage(29, g.hero('0/30'), '0/1');
        g.play(g.hand(0, 'Truesilver Champion'), null);
        g.weapon('4/2 Truesilver Champion');

        g.play(g.hero('4/1 {}'), g.oBattlefield(0, '1/1'), '4/2 {}', '{Dead}');
    });

});
