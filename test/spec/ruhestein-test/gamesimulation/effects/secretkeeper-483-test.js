/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/2 Secretkeeper; Whenever a Secret is played, gain +1/+1.

describe('Secretkeeper483', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Secretkeeper'
                ],
            }
        });

        g.play(g.hand(0, 'Secretkeeper'), 0, '{}');

        // TODO
    });

});
