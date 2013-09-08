/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/4 Leokk; Other friendly minions have +1 Attack.

describe('Leokk32', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wisp',
                    '1 Animal Companion'
                ],
                playCards: 1
            }
        });

        g.gm.predictRoll(2);
        g.play(g.hand(0, 'Animal Companion'), null, '{Dead}');
        g.battlefield(0, '2/1 Wisp');
        g.battlefield(1, '2/4 Leokk {ZZZ}');
    });

});
