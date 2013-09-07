/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Shield Slam; Deal 1 damage to a minion for each Armor you have.

describe('ShieldSlam50', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shield Slam'
                ],
            }
        });

        g.play(g.hand(0, 'Shield Slam'), 0, '{}');

        // TODO
    });

});
