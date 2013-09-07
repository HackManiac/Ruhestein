/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Blessed Champion; Double a minion's Attack.

describe('BlessedChampion7', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Blessed Champion'
                ],
            }
        });

        g.play(g.hand(0, 'Blessed Champion'), 0, '{}');

        // TODO
    });

});
