/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Soulfire; Deal 4 damage. Discard a random card.

describe('Soulfire529', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Soulfire'
                ],
            }
        });

        g.play(g.hand(0, 'Soulfire'), 0, '{}');

        // TODO
    });

});
