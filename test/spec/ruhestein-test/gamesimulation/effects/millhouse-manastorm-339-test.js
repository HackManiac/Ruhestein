/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 4/4 Millhouse Manastorm; Battlecry: Enemy spells cost (0) next turn.

describe('MillhouseManastorm339', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Millhouse Manastorm'
                ],
            }
        });

        g.play(g.hand(0, 'Millhouse Manastorm'), 0, '{}');

        // TODO
    });

});
