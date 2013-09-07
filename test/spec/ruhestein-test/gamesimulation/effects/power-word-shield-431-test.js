/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Power Word: Shield; Give a minion +3 Health.

describe('PowerWordShield431', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wisp',
                    '1 Power Word: Shield'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Power Word: Shield'), g.battlefield(0, '1/1'), '{Dead}', '1/4');
    });

});
