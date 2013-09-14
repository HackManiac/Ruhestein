/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 2/4 Keeper of the Grove; Choose One - Deal 2 damage; or Silence a minion.

describe('KeeperOfTheGrove459', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '2 Keeper of the Grove'
                ],
                playCards: 1
            }
        });

        g.playChooseOne(g.hand(0, 'Keeper of the Grove'), 0, g.hero(0, '0/30'), 1, '{ZZZ}', '0/28');

        g.playChooseOne(g.hand(0, 'Keeper of the Grove'), 1, g.battlefield(0, '4/12 {ZZZ}'), 2, '{ZZZ}', '4/12 {Silenced,ZZZ}');
    });

});
