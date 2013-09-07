/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Blood Knight; Battlecry: All minions lose Divine Shield. Gain +3/+3 for each Shield lost.

describe('BloodKnight75', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Blood Knight'
                ],
            }
        });

        g.play(g.hand(0, 'Blood Knight'), 0, '{}');

        // TODO
    });

});
