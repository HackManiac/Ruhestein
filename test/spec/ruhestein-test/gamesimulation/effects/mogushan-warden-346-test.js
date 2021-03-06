/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 1/7 Mogu'shan Warden; Taunt

describe('MogushanWarden346', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mogu\'shan Warden'
                ],
            }
        });

        g.play(g.hand(0, 'Mogu\'shan Warden'), 0, '1/7 {Taunt,ZZZ}');
    });

});
