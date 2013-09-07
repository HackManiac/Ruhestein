/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Inner Rage; Deal 1 damage to a minion.  It gains +2 Attack this turn.

describe('InnerRage366', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Inner Rage'
                ],
            }
        });

        g.play(g.hand(0, 'Inner Rage'), 0, '{}');

        // TODO
    });

});
