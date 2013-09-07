/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 0/4 Summoning Portal; Your minions cost (2) less, but not less than (1).

describe('SummoningPortal566', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Summoning Portal'
                ],
            }
        });

        g.play(g.hand(0, 'Summoning Portal'), 0, '{}');

        // TODO
    });

});
