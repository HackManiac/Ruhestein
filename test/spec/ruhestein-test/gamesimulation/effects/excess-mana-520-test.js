/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Excess Mana; Draw a card. (You can only have 10 Mana in your tray.)

describe('ExcessMana520', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Excess Mana'
                ],
            }
        });

        g.play(g.hand(0, 'Excess Mana'), 0, '{}');

        // TODO
    });

});
