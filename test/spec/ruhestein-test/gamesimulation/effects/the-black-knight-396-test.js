/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 4/5 The Black Knight; Battlecry: Destroy a minion with Taunt.

describe('TheBlackKnight396', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 The Black Knight'
                ],
            }
        });

        g.play(g.hand(0, 'The Black Knight'), 0, '{}');

        // TODO
    });

});
