/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/6 Spiteful Smith; Enrage: Your weapon has +2 Attack.

describe('SpitefulSmith627', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Spiteful Smith'
                ],
            }
        });

        g.play(g.hand(0, 'Spiteful Smith'), 0, '{}');

        // TODO
    });

});
