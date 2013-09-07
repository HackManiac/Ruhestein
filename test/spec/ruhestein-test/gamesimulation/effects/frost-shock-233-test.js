/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Frost Shock; Deal 1 damage to an enemy character and Freeze it.

describe('FrostShock233', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Frost Shock'
                ],
            }
        });

        g.play(g.hand(0, 'Frost Shock'), 0, '{}');

        // TODO
    });

});
