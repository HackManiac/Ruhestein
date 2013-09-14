/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Mark of Nature; +4 Health and Taunt.

describe('MarkOfNature133', function() {

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

        g.playChooseOne(g.hand(0, 'Mark of Nature'), 1, g.battlefield(0, '1/1 {ZZZ}'), '{Dead}', '1/5 {Taunt,ZZZ}');
    });

});
