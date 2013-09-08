/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Animal Companion; Summon a random Beast Companion.

describe('AnimalCompanion578', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '3 Animal Companion'
                ],
            }
        });

        var beastsOrder = [
            0,
            2,
            1
        ];

        var beasts = [
            '4/4 Misha {Taunt,ZZZ}',
            '2/4 Leokk {ZZZ}',
            '4/2 Huffer {Charge}'
        ];

        for (var i = 0; i < beasts.length; i++) {
            var index = beastsOrder [i];
            var beast = beasts [index];

            g.test.replenishMana();
            g.gm.predictRoll(index + 1);
            g.play(g.hand(0, 'Animal Companion'), 0, '{Dead}');
            g.battlefield(i, beast);
        }

        g.battlefield(0, '5/4');
        g.battlefield(1, '5/2');
        g.battlefield(2, '2/4');
    });

});
