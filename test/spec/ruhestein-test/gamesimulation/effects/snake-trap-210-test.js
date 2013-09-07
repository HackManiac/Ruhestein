/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Snake Trap; Secret: When one of your minions is attacked, summon three 1/1 Snakes.

describe('SnakeTrap210', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Snake Trap'
                ],
            }
        });

        g.play(g.hand(0, 'Snake Trap'), 0, '{}');

        // TODO
    });

});
