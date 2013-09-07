/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Flare; All minions lose Stealth. Destroy all enemy Secrets. Draw a card.

describe('Flare630', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Flare'
                ],
            }
        });

        g.play(g.hand(0, 'Flare'), 0, '{}');

        // TODO
    });

});
