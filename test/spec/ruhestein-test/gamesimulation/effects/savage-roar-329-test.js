/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Savage Roar; Give your characters +2 Attack this turn.

describe('SavageRoar329', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Savage Roar'
                ],
            }
        });

        g.play(g.hand(0, 'Savage Roar'), 0, '{}');

        // TODO
    });

});
