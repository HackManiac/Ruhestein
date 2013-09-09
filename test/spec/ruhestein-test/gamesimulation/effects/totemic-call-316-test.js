/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Totemic Call; Hero Power  Summon a random Totem.

describe('TotemicCall316', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'Shaman',
                deck: [
                ],
            }
        });

        var totems = [
            '0/2 Healing Totem {EffectTrigger,ZZZ}',
            '1/1 Searing Totem {ZZZ}',
            '0/2 Stoneclaw Totem {Taunt,ZZZ}',
            '0/2 Wrath of Air Totem {ZZZ}'
        ];

        for (var i = 0; i < totems.length; i++) {
            var totem = totems [i];
            g.gm.predictRoll(1);
            g.play(g.heroPower('Totemic Call'), null);
            g.battlefield(i, totem);

            g.endTurn();
            g.endTurn();
        }
    });

});
