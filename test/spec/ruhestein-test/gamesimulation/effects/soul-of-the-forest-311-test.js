/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Soul of the Forest; Give your minions "Deathrattle: Summon a 2/2 Treant."

describe('SoulOfTheForest311', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Soul of the Forest'
                ],
            }
        });

        g.play(g.hand(0, 'Soul of the Forest'), 0, '{}');

        // TODO
    });

});
