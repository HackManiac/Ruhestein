/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Frost Nova; Freeze all enemy minions.

describe('FrostNova49', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Frost Nova'
                ],
            }
        });

        g.play(g.hand(0, 'Frost Nova'), 0, '{}');

        // TODO
    });

});
