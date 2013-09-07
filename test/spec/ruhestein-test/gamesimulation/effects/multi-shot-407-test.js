/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Multi-Shot; Deal 3 damage to two random enemy minions.

describe('MultiShot407', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Multi-Shot'
                ],
            }
        });

        g.play(g.hand(0, 'Multi-Shot'), 0, '{}');

        // TODO
    });

});
