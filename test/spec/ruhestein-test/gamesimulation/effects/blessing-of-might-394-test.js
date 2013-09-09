/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Blessing of Might; Give a minion +3 Attack.

describe('BlessingOfMight394', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wisp',
                    '1 Blessing of Might'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Blessing of Might'), g.battlefield(0, '1/1 Wisp'), '{Dead}', '4/1');
    });

});
