/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 5/3 Kidnapper; Combo: Return a minion to its owner's hand.

describe('Kidnapper562', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Kidnapper'
                ],
            }
        });

        g.play(g.hand(0, 'Kidnapper'), 0, '{}');

        // TODO
    });

});
