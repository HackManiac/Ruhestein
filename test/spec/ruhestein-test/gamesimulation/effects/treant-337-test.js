/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 2/2 Treant; Charge.  At the end of the turn, destroy this minion.

describe('Treant337', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Treant'
                ],
            }
        });

        g.play(g.hand(0, 'Treant'), 0, '{}');

        // TODO
    });

});
