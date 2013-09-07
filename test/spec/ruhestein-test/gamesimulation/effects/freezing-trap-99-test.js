/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Freezing Trap; Secret: When an enemy minion attacks, return it to its owner's hand and it costs (2) more.

describe('FreezingTrap99', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Freezing Trap'
                ],
            }
        });

        g.play(g.hand(0, 'Freezing Trap'), 0, '{}');

        // TODO
    });

});
