/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Corruption; Choose an enemy minion.   At the start of your turn, destroy it.

describe('Corruption252', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Corruption'
                ],
            }
        });

        g.play(g.hand(0, 'Corruption'), 0, '{}');

        // TODO
    });

});
