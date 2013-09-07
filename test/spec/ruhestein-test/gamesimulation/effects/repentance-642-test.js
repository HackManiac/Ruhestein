/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Repentance; Secret: When your opponent plays a minion, reduce its Health to 1.

describe('Repentance642', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Repentance'
                ],
            }
        });

        g.play(g.hand(0, 'Repentance'), 0, '{}');

        // TODO
    });

});
