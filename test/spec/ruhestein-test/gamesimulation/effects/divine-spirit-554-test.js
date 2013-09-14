/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Divine Spirit; Double a minion's Health.

describe('DivineSpirit554', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Divine Spirit'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Divine Spirit'), g.battlefield(0, '4/12'), '{Dead}', '4/24');
    });

});
