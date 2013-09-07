/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/3 Mana Addict; Whenever you cast a spell, gain +2 Attack this turn.

describe('ManaAddict67', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mana Addict'
                ],
            }
        });

        g.play(g.hand(0, 'Mana Addict'), 0, '{}');

        // TODO
    });

});