/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (6) Metamorphosis; Do something crazy.

describe('Metamorphosis592', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Metamorphosis'
                ],
            }
        });

        g.play(g.hand(0, 'Metamorphosis'), 0, '{}');

        // TODO
    });

});
