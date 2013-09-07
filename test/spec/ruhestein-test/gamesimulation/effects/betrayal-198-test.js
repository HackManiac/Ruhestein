/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Betrayal; An enemy minion deals its damage to the minions next to it.

describe('Betrayal198', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Betrayal'
                ],
            }
        });

        g.play(g.hand(0, 'Betrayal'), 0, '{}');

        // TODO
    });

});
