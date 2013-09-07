/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Summon a Panther; Summon a 3/2 Panther.

describe('SummonAPanther219', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Summon a Panther'
                ],
            }
        });

        g.play(g.hand(0, 'Summon a Panther'), 0, '{}');

        // TODO
    });

});
