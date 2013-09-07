/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Lightning Bolt; Deal 3 damage. Overload: (1)

describe('LightningBolt10', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Lightning Bolt'
                ],
            }
        });

        g.play(g.hand(0, 'Lightning Bolt'), 0, '{}');

        // TODO
    });

});
