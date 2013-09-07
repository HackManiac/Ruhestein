/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Vaporize; Secret: When a minion attacks your hero, destroy it.

describe('Vaporize160', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Vaporize'
                ],
            }
        });

        g.play(g.hand(0, 'Vaporize'), 0, '{}');

        // TODO
    });

});
