/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Shield Slam; Deal 1 damage to a minion for each Armor you have.

describe('ShieldSlam50', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'warrior',
                deck: [
                    '1 Malygos',
                    '1 Shield Slam'
                ],
                playCards: 1
            }
        });

        g.hero('0/30 [0]');
        g.play(g.heroPower('Armor Up!'), null);
        g.hero('0/30 [2]');

        g.play(g.hand(0, 'Shield Slam'), g.battlefield(0, '4/12'), '{Dead}', '4/10');
    });

});
