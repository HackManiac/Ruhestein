/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (8) Pyroblast; Deal 10 damage.

describe('Pyroblast496', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Pyroblast'
                ],
            }
        });

        g.play(g.hand(0, 'Pyroblast'), 0, '{}');

        // TODO
    });

});
