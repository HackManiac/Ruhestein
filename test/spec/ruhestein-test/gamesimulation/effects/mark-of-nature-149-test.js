/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Mark of Nature; Choose One - Give a minion +4 Attack; or +4 Health and Taunt.

describe('MarkOfNature149', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wisp',
                    '2 Mark of Nature'
                ],
                playCards: 1
            }
        });

        g.playChooseOne(g.hand(0, 'Mark of Nature'), 0, g.battlefield(0, '1/1 {ZZZ}'), '{Dead}', '5/1 {ZZZ}');
        g.playChooseOne(g.hand(0, 'Mark of Nature'), 1, g.battlefield(0, '5/1 {ZZZ}'), '{Dead}', '5/5 {Taunt,ZZZ}');
    });

});
