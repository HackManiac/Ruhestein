/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 2/1 Young Priestess; At the end of your turn, give another random friendly minion +1 Health.

describe('YoungPriestess123', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Wisp',
                    '1 Young Priestess'
                ],
                playCards: 2
            }
        });

        g.play(g.hand(0, 'Young Priestess'), 2, '{EffectTrigger,ZZZ}');

        g.battlefield(1, '1/1');
        g.gm.predictRoll(2);
        g.endTurn();
        g.oBattlefield(1, '1/2');
    });

});
