/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (8) Twisting Nether; Destroy all minions.

describe('TwistingNether398', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Twisting Nether'
                ],
            }
        });

        g.play(g.hand(0, 'Twisting Nether'), 0, '{}');

        // TODO
    });

});
