/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (8) 6/6 Tirion Fordring; Divine Shield. Taunt. Deathrattle: Equip a 5/3 Ashbringer.

describe('TirionFordring391', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Tirion Fordring'
                ],
            }
        });

        g.play(g.hand(0, 'Tirion Fordring'), 0, '{}');

        // TODO
    });

});
