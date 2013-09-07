/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Deadly Poison; Give your weapon +2 Attack.

describe('DeadlyPoison87', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'rogue',
                deck: [
                    '1 Deadly Poison'
                ],
            }
        });

        g.play(g.heroPower('Dagger Mastery'));
        g.weapon('1/2 Wicked Knife');
        g.play(g.hand(0, 'Deadly Poison'), 0, '{Dead}');
        g.weapon('3/2 Wicked Knife');
    });

});
