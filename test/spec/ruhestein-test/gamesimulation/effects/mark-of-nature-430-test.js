/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Mark of Nature; +4 Attack.

describe('MarkOfNature430', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wisp',
                    '1 Mark of Nature'
                ],
                playCards: 1
            }
        });

        g.playChooseOne(g.hand(0, 'Mark of Nature'), 0, g.battlefield(0, '1/1 {ZZZ}'), '{Dead}', '5/1 {ZZZ}');
    });

});
