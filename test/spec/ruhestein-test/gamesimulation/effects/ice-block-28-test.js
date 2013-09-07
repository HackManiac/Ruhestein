/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Ice Block; Secret: When your hero takes fatal damage, prevent it and become Immune this turn.

describe('IceBlock28', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ice Block'
                ],
            }
        });

        g.play(g.hand(0, 'Ice Block'), 0, '{}');

        // TODO
    });

});
