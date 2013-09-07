/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Explosive Trap; Secret: When your hero is attacked, deal 2 damage to all enemies.

describe('ExplosiveTrap344', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Explosive Trap'
                ],
            }
        });

        g.play(g.hand(0, 'Explosive Trap'), 0, '{}');

        // TODO
    });

});
