/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (9) 8/8 Nozdormu; Players only have 15 seconds to take their turns.

describe('Nozdormu285', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Nozdormu'
                ],
            }
        });

        g.play(g.hand(0, 'Nozdormu'), 0, '{}');

        // TODO
    });

});
