/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Ancestral Healing; Restore a minion to full Health and give it Taunt.

describe('AncestralHealing216', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Ancestral Healing'
                ],
                playCards: 1
            }
        });

        g.test.dealDamage(11, g.battlefield(0, '4/12 {ZZZ}'), '4/1 {ZZZ}');
        g.play(g.hand(0, 'Ancestral Healing'), g.battlefield(0, '4/1 {ZZZ}'), '{Dead}', '4/12 {Taunt,ZZZ}');

        // TODO
    });

});
