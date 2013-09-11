/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Hand of Protection; Give a minion Divine Shield.

describe('HandOfProtection499', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Hand of Protection'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Hand of Protection'), g.battlefield(0, '4/12 {ZZZ}'), '{Dead}', '4/12 {DivineShield,ZZZ}');
    });

});
