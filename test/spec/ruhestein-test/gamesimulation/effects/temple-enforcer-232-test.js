/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 6/6 Temple Enforcer; Battlecry: Give a friendly minion +3 Health.

describe('TempleEnforcer232', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Temple Enforcer'
                ],
            }
        });

        g.play(g.hand(0, 'Temple Enforcer'), 0, '{}');

        // TODO
    });

});
