/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Noble Sacrifice; Secret: When an enemy attacks, summon a 2/1 Defender as the new target.

describe('NobleSacrifice158', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Noble Sacrifice'
                ],
            }
        });

        g.play(g.hand(0, 'Noble Sacrifice'), 0, '{}');

        // TODO
    });

});
