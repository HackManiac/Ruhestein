/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 3/3 Faceless Manipulator; Battlecry: Choose a minion and become a copy of it.

describe('FacelessManipulator450', function() {

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
                    '1 Faceless Manipulator'
                ],
            }
        });

        g.play(g.hand(0, 'Faceless Manipulator'), g.oBattlefield(0, '4/12 Malygos'), 0, '{Dead}');
        g.battlefield(0, '4/12 Malygos {ZZZ}');
    });

});
