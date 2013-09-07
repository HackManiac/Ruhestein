/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/2 Crazy Monkey; Battlecry: Throw Bananas.

describe('CrazyMonkey393', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Crazy Monkey'
                ],
            }
        });

        g.play(g.hand(0, 'Crazy Monkey'), 0, '{}');

        // TODO
    });

});
