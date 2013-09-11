/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Charge; Give a friendly minion Charge.

describe('Charge646', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Charge'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Charge'), g.battlefield(0, '4/12 {ZZZ}'), '{Dead}', '4/12 {Charge}');
    });

});
