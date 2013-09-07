/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 4/3 Spellbreaker; Battlecry: Silence a minion.

describe('Spellbreaker42', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Spellbreaker'
                ],
            }
        });

        g.play(g.hand(0, 'Spellbreaker'), 0, '{}');

        // TODO
    });

});
