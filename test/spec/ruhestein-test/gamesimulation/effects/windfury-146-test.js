/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Windfury; Give a minion Windfury.

describe('Windfury146', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wisp',
                    '1 Windfury'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Windfury'), g.battlefield(0, '1/1 Wisp {ZZZ}'), '{Dead}', '{Windfury,ZZZ}');
    });

});
