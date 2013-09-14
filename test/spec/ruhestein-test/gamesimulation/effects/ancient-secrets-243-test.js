/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Ancient Secrets; Restore 8 Health.

describe('AncientSecrets243', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ancient of Lore'
                ],
            }
        });

        g.test.dealDamage(10, g.hero('0/30'), '0/20');
        g.playChooseOne(g.hand(0, 'Ancient of Lore'), 1, g.hero('0/20'), 0, '{ZZZ}', '0/28');
    });

});
