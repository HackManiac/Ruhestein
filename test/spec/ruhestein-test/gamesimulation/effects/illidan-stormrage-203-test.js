/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 7/5 Illidan Stormrage; Whenever you play a card, summon a 2/1 Flame of Azzinoth.

describe('IllidanStormrage203', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Illidan Stormrage'
                ],
            }
        });

        g.play(g.hand(0, 'Illidan Stormrage'), 0, '{}');

        // TODO
    });

});
