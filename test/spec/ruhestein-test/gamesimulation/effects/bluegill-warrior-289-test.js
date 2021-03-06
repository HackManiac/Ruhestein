/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/1 Bluegill Warrior; Charge

describe('BluegillWarrior289', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Bluegill Warrior'
                ],
            }
        });

        g.play(g.hand(0, 'Bluegill Warrior'), 0, '2/1 {Charge}');
    });

});
