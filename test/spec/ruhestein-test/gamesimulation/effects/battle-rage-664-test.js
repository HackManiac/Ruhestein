/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Battle Rage; Draw a card for each damaged minion.

describe('BattleRage664', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Battle Rage'
                ],
            }
        });

        g.play(g.hand(0, 'Battle Rage'), 0, '{}');

        // TODO
    });

});
