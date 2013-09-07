/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Arcane Shot; Deal 2 damage.

describe('ArcaneShot167', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Arcane Shot'
                ],
            }
        });

        g.play(g.hand(0, 'Arcane Shot'), g.oHero('0/30'), null, '0/28');
        g.test.playSpellPowerPlus5();
        g.play(g.hand(0, 'Arcane Shot'), g.oHero('0/28'), null, '0/21');
    });

});
