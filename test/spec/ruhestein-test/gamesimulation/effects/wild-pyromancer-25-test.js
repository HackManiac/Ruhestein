/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 3/2 Wild Pyromancer; After you cast a spell, deal 1 damage to ALL minions.

describe('WildPyromancer25', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wild Pyromancer'
                ],
            }
        });

        g.play(g.hand(0, 'Wild Pyromancer'), 0, '{}');

        // TODO
    });

});
