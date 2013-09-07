/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 1/3 Acolyte of Pain; Whenever this minion takes damage, draw a card.

describe('AcolyteOfPain428', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Acolyte of Pain'
                ],
            }
        });

        g.play(g.hand(0, 'Acolyte of Pain'), 0, '{}');

        // TODO
    });

});
