/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (7) 6/6 Stormwind Champion; Your other minions have +1/+1.

describe('StormwindChampion310', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Stormwind Champion'
                ],
            }
        });

        g.play(g.hand(0, 'Stormwind Champion'), 0, '{}');

        // TODO
    });

});
