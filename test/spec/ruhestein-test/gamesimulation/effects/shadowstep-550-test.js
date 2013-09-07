/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Shadowstep; Return a friendly minion to your hand. It costs (2) less.

describe('Shadowstep550', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shadowstep'
                ],
            }
        });

        g.play(g.hand(0, 'Shadowstep'), 0, '{}');

        // TODO
    });

});
