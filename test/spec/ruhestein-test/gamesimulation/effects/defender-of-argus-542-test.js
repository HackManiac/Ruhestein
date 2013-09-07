/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 3/3 Defender of Argus; Battlecry: Give adjacent minions +1/+1 and Taunt.

describe('DefenderOfArgus542', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Defender of Argus'
                ],
            }
        });

        g.play(g.hand(0, 'Defender of Argus'), 0, '{}');

        // TODO
    });

});
