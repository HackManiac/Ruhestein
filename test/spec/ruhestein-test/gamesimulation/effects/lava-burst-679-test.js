/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Lava Burst; Deal 5 damage. Overload: (2)

describe('LavaBurst679', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Lava Burst'
                ],
            }
        });

        g.play(g.hand(0, 'Lava Burst'), 0, '{}');

        // TODO
    });

});
