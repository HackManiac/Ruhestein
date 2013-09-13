/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Raging Worgen; Enrage: Windfury and +1 Attack

describe('RagingWorgen95', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Raging Worgen'
                ],
            }
        });

        g.play(g.hand(0, 'Raging Worgen'), 0, '3/3 {ZZZ}');
        g.test.dealDamage(1, g.battlefield(0, '3/3 {ZZZ}'), '4/2 {Windfury,ZZZ}');
        g.test.dealDamage(1, g.battlefield(0, '4/2 {Windfury,ZZZ}'), '4/1 {Windfury,ZZZ}');
        g.test.healDamage(2, g.battlefield(0, '4/1 {Windfury,ZZZ}'), '3/3 {ZZZ}');
    });

});
