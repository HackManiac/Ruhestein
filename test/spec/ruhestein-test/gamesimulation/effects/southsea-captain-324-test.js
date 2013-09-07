/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Southsea Captain; Your other Pirates have +1/+1.

describe('SouthseaCaptain324', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Southsea Captain'
                ],
            }
        });

        g.play(g.hand(0, 'Southsea Captain'), 0, '{}');

        // TODO
    });

});
