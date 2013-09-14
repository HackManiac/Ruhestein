/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 3/6 Fen Creeper; Taunt

describe('FenCreeper476', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Fen Creeper'
                ],
            }
        });

        g.play(g.hand(0, 'Fen Creeper'), 0, '{Taunt,ZZZ}');
    });

});
