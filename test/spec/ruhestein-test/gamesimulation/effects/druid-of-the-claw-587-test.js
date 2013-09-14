/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/4 Druid of the Claw; Choose One - Charge; or +2 Health and Taunt.

describe('DruidOfTheClaw587', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Druid of the Claw'
                ],
            }
        });

        g.playChooseOne(g.hand(0, 'Druid of the Claw'), 0, 0, '{Dead,ZZZ}');
        g.battlefield(0, '4/4 {Charge}');

        g.playChooseOne(g.hand(0, 'Druid of the Claw'), 1, 1, '{Dead,ZZZ}');
        g.battlefield(1, '4/6 {Taunt,ZZZ}');
    });

});
