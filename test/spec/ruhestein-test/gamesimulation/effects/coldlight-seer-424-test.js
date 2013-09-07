/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/3 Coldlight Seer; Battlecry: Give ALL other Murlocs +2 Health.

describe('ColdlightSeer424', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Coldlight Seer'
                ],
            }
        });

        g.play(g.hand(0, 'Coldlight Seer'), 0, '{}');

        // TODO
    });

});
