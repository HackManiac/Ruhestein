/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Reinforce; Hero Power  Summon a 1/1 Silver Hand Recruit.

describe('Reinforce248', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'paladin',
                deck: [
                ],
            }
        });

        g.play(g.heroPower('Reinforce'), null);
        g.battlefield(0, '1/1 Silver Hand Recruit {ZZZ}');
    });

});
