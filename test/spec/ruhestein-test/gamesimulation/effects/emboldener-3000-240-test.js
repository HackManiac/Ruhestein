/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/4 Emboldener 3000; At the end of your turn, give a random minion +1/+1.

describe('Emboldener3000240', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Emboldener 3000'
                ],
            }
        });

        g.play(g.hand(0, 'Emboldener 3000'), 0, '{}');

        // TODO
    });

});
