/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Rampage; Give a damaged minion +3/+3.

describe('Rampage454', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Core Hound',
                    '1 Rampage'
                ],
                playCards: 1
            }
        });

        g.test.dealDamage(1, g.battlefield(0, '9/5'), '9/4');
        g.play(g.hand(0, 'Rampage'), g.battlefield(0, '9/4'), '{Dead}', '12/7');
    });

});
