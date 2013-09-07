/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (7) 5/5 Ancient of Lore; Choose One - Draw 2 cards; or Restore 8 Health.

describe('AncientOfLore34', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ancient of Lore'
                ],
            }
        });

        g.play(g.hand(0, 'Ancient of Lore'), 0, '{}');

        // TODO
    });

});
