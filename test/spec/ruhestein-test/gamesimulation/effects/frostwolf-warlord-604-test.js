/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/4 Frostwolf Warlord; Has +1/+1 for each other friendly minion on the battlefield.

describe('FrostwolfWarlord604', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Frostwolf Warlord'
                ],
            }
        });

        g.play(g.hand(0, 'Frostwolf Warlord'), 0, '{}');

        // TODO
    });

});
