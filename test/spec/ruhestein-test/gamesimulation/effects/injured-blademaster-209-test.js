/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/7 Injured Blademaster; Battlecry: Deal 4 damage to HIMSELF.

describe('InjuredBlademaster209', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Injured Blademaster'
                ],
            }
        });

        g.play(g.hand(0, 'Injured Blademaster'), 0, '{}');

        // TODO
    });

});
