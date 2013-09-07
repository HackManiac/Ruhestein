/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Counterspell; Secret: When your opponent casts a spell, Counter it.

describe('Counterspell531', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Counterspell'
                ],
            }
        });

        g.play(g.hand(0, 'Counterspell'), 0, '{}');

        // TODO
    });

});
