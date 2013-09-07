/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Shadowflame; Destroy a friendly minion and deal its Attack damage to all enemy minions.

describe('Shadowflame673', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shadowflame'
                ],
            }
        });

        g.play(g.hand(0, 'Shadowflame'), 0, '{}');

        // TODO
    });

});
