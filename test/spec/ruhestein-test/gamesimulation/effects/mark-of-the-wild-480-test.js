/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Mark of the Wild; Give a minion Taunt and +2/+2. (+2 Attack/+2 Health)

describe('MarkOfTheWild480', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wisp',
                    '1 Mark of the Wild'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Mark of the Wild'), g.battlefield(0, '1/1 {ZZZ}'), '{Dead}', '3/3 {Taunt,ZZZ}');
    });

});
