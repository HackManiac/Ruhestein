/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/2 Raid Leader; Your other minions have +1 Attack.

describe('RaidLeader502', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Raid Leader'
                ],
            }
        });

        g.play(g.hand(0, 'Raid Leader'), 0, '{}');

        // TODO
    });

});
