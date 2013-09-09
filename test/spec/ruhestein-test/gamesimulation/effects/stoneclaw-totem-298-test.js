/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/2 Stoneclaw Totem; Taunt

describe('StoneclawTotem298', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'Shaman',
                deck: [
                ],
            }
        });

        g.gm.predictRoll(3);
        g.play(g.heroPower('Totemic Call'), null);
        g.battlefield(0, '0/2 Stoneclaw Totem {Taunt,ZZZ}');
    });

});
