/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/3 Harvest Golem; Deathrattle: Summon a 2/1 Damaged Golem.

describe('HarvestGolem386', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Harvest Golem'
                ],
            }
        });

        g.play(g.hand(0, 'Harvest Golem'), 0, '{}');

        // TODO
    });

});
