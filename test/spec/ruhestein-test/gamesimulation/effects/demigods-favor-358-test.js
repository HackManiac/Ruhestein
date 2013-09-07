/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Demigod's Favor; Give your other minions +2/+2.

describe('DemigodsFavor358', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Demigod\'s Favor'
                ],
            }
        });

        g.play(g.hand(0, 'Demigod\'s Favor'), 0, '{}');

        // TODO
    });

});
