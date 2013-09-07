/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From weapon card: (2) 2/3 Stormforged Axe; Overload: (1)

describe('StormforgedAxe152', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Stormforged Axe'
                ],
            }
        });

        g.play(g.hand(0, 'Stormforged Axe'), 0, '{}');

        // TODO
    });

});
