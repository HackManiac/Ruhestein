/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Greater Heal; Restore 2 Health to a character for each card in your opponent's hand.

describe('GreaterHeal457', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Greater Heal'
                ],
            }
        });

        g.play(g.hand(0, 'Greater Heal'), 0, '{}');

        // TODO
    });

});
