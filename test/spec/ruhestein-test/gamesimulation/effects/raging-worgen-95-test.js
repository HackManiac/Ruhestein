/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Raging Worgen; Enrage: Windfury and +1 Attack

describe('RagingWorgen95', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Raging Worgen'
                ],
            }
        });

        g.play(g.hand(0, 'Raging Worgen'), 0, '{}');

        // TODO
    });

});
