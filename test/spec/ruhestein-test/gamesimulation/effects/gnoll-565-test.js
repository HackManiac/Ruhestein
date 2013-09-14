/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Gnoll; Taunt

describe('Gnoll565', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Hogger'
                ],
            }
        });

        g.play(g.hand(0, 'Hogger'), 0, '4/4 {ZZZ}');
        g.endTurn();
        g.oBattlefield(1, '2/2 {Taunt,ZZZ}');
        g.endTurn();
        g.endTurn();
        g.oBattlefield(2, '2/2 {Taunt,ZZZ}');
    });

});
