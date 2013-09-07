/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Lightning Storm; Deal 2-3 damage to all enemy minions. Overload: (2)

describe('LightningStorm676', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Lightning Storm'
                ],
            }
        });

        g.play(g.hand(0, 'Lightning Storm'), 0, '{}');

        // TODO
    });

});
