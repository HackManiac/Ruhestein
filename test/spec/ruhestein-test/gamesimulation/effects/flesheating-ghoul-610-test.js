/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/3 Flesheating Ghoul; Whenever a minion dies, gain +1 Attack.

describe('FlesheatingGhoul610', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Flesheating Ghoul'
                ],
            }
        });

        g.play(g.hand(0, 'Flesheating Ghoul'), 0, '{}');

        // TODO
    });

});
