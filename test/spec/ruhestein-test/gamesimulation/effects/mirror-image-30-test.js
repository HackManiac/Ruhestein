/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Mirror Image; Summon two 0/1 minions with Taunt.

describe('MirrorImage30', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mirror Image'
                ],
            }
        });

        g.play(g.hand(0, 'Mirror Image'), null, '{Dead}');
        g.battlefield(0, '0/1 Mirror Image {Taunt,ZZZ}');
        g.battlefield(1, '0/1 Mirror Image {Taunt,ZZZ}');
    });

});
