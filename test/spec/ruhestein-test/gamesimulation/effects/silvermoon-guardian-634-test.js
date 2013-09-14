/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 3/3 Silvermoon Guardian; Divine Shield

describe('SilvermoonGuardian634', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Silvermoon Guardian'
                ],
            }
        });

        g.play(g.hand(0, 'Silvermoon Guardian'), 0, '{DivineShield,ZZZ}');
    });

});
