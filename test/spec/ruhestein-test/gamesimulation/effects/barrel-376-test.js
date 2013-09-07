/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (0) 0/2 Barrel; Is something in this barrel?

describe('Barrel376', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Barrel'
                ],
            }
        });

        g.play(g.hand(0, 'Barrel'), 0, '{}');

        // TODO
    });

});
