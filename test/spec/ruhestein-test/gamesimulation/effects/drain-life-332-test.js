/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Drain Life; Deal 2 damage. Restore #2 Health to your hero.

describe('DrainLife332', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Drain Life'
                ],
            }
        });

        g.play(g.hand(0, 'Drain Life'), 0, '{}');

        // TODO
    });

});
