/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Moonfire; Deal 2 damage.

describe('Moonfire111', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Keeper of the Grove'
                ],
            }
        });

        g.playChooseOne(g.hand(0, 'Keeper of the Grove'), 0, g.hero(0, '0/30'), 0, '{ZZZ}', '0/28');
    });

});
