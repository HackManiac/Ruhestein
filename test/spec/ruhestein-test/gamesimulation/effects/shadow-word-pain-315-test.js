/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Shadow Word: Pain; Destroy a minion with 3 or less Attack.

describe('ShadowWordPain315', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Bloodfen Raptor'
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Shadow Word: Pain'
                ],
            }
        });

        g.play(g.hand(0, 'Shadow Word: Pain'), g.oBattlefield(0, '3/2 Bloodfen Raptor'), '{Dead}', '{Dead}');
    });

});
