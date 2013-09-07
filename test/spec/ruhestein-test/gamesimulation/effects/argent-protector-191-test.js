/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Argent Protector; Battlecry: Give a friendly minion Divine Shield.

describe('ArgentProtector191', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Argent Protector'
                ],
            }
        });

        g.play(g.hand(0, 'Argent Protector'), 0, '{}');

        // TODO
    });

});
