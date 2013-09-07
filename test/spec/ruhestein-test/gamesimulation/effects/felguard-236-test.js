/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/5 Felguard; Taunt. Battlecry: Destroy one of your Mana Crystals.

describe('Felguard236', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Felguard'
                ],
            }
        });

        g.play(g.hand(0, 'Felguard'), 0, '{}');

        // TODO
    });

});
