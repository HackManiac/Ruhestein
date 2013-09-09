/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Assassinate; Destroy an enemy minion.

describe('Assassinate568', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Malygos',
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Assassinate'
                ],
            }
        });

        g.play(g.hand(0, 'Assassinate'), g.oBattlefield(0, '4/12'), '{Dead}', '{Dead}');
    });

});
