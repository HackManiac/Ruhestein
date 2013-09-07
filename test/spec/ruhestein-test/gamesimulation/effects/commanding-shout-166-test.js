/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Commanding Shout; Your minions can't be reduced below 1 Health this turn.

describe('CommandingShout166', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Commanding Shout'
                ],
            }
        });

        g.play(g.hand(0, 'Commanding Shout'), 0, '{}');

        // TODO
    });

});
