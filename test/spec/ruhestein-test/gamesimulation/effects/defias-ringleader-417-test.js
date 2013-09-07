/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/3 Defias Ringleader; Combo: Summon a 2/1 Defias Bandit.

describe('DefiasRingleader417', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Defias Ringleader'
                ],
            }
        });

        g.play(g.hand(0, 'Defias Ringleader'), 0, '{}');

        // TODO
    });

});
