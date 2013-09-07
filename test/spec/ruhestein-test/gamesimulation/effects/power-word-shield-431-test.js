/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Power Word: Shield; Give a minion +3 Health.

describe('PowerWordShield431', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Power Word: Shield'
                ],
            }
        });

        g.play(g.hand(0, 'Power Word: Shield'), 0, '{}');

        // TODO
    });

});
