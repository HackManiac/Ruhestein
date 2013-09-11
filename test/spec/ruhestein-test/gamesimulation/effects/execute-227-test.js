/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Execute; Destroy a damaged enemy minion.

describe('Execute227', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Malygos'
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Execute'
                ],
            }
        });

        g.test.dealDamage(1, g.oBattlefield(0, '4/12'), '4/11');
        g.play(g.hand(0, 'Execute'), g.oBattlefield(0, '4/11'), '{Dead}', '{Dead}');
    });

});
