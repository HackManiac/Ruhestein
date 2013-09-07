/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Frostbolt; Deal 3 damage to a character and Freeze it.

describe('Frostbolt177', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Frostbolt'
                ],
            }
        });

        g.play(g.hand(0, 'Frostbolt'), 0, '{}');

        // TODO
    });

});
