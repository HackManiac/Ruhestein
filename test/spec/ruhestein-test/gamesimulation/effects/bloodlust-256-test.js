/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Bloodlust; Give your minions +3 Attack this turn.

describe('Bloodlust256', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Bloodlust'
                ],
            }
        });

        g.play(g.hand(0, 'Bloodlust'), 0, '{}');

        // TODO
    });

});
