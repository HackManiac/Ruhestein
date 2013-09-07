/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Arcane Explosion; Deal 1 damage to all enemy minions.

describe('ArcaneExplosion56', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Arcane Explosion'
                ],
            }
        });

        g.play(g.hand(0, 'Arcane Explosion'), 0, '{}');

        // TODO
    });

});
