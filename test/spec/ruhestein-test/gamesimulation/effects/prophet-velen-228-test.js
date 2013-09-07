/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (7) 7/7 Prophet Velen; Double the damage and healing of your spells.

describe('ProphetVelen228', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Prophet Velen'
                ],
            }
        });

        g.play(g.hand(0, 'Prophet Velen'), 0, '{}');

        // TODO
    });

});
