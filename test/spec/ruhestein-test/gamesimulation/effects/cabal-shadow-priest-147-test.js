/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 3/4 Cabal Shadow Priest; Battlecry: Take control of an enemy minion that has 2 or less Attack.

describe('CabalShadowPriest147', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Cabal Shadow Priest'
                ],
            }
        });

        g.play(g.hand(0, 'Cabal Shadow Priest'), 0, '{}');

        // TODO
    });

});
