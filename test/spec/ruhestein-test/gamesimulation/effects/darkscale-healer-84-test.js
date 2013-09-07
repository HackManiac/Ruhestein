/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/5 Darkscale Healer; Battlecry: Restore 2 Health to all friendly characters.

describe('DarkscaleHealer84', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Darkscale Healer'
                ],
            }
        });

        g.play(g.hand(0, 'Darkscale Healer'), 0, '{}');

        // TODO
    });

});
