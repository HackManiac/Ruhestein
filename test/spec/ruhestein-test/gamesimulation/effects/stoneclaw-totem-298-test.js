/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/2 Stoneclaw Totem; Taunt

describe('StoneclawTotem298', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Stoneclaw Totem'
                ],
            }
        });

        g.play(g.hand(0, 'Stoneclaw Totem'), 0, '{}');

        // TODO
    });

});
