/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 4/5 Sunwalker; Taunt. Divine Shield

describe('Sunwalker221', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Sunwalker'
                ],
            }
        });

        g.play(g.hand(0, 'Sunwalker'), 0, '{}');

        // TODO
    });

});
