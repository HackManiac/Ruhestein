/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Shield Block; Gain 5 Armor.  Draw a card.

describe('ShieldBlock493', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shield Block'
                ],
            }
        });

        g.play(g.hand(0, 'Shield Block'), 0, '{}');

        // TODO
    });

});
