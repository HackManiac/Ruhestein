/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 3/2 Mad Bomber; Battlecry: Deal 3 damage randomly split between all other characters.

describe('MadBomber80', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mad Bomber'
                ],
            }
        });

        g.play(g.hand(0, 'Mad Bomber'), 0, '{}');

        // TODO
    });

});
