/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Humility; Change a minion's Attack to 1.

describe('Humility189', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Humility'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Humility'), g.battlefield(0, '4/12'), '{Dead}', '1/12');
    });

});
