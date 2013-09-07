/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Murloc Warleader; ALL other Murlocs have +2/+1.

describe('MurlocWarleader222', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Murloc Warleader'
                ],
            }
        });

        g.play(g.hand(0, 'Murloc Warleader'), 0, '{}');

        // TODO
    });

});
