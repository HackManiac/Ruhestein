/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/3 Sunfury Protector; Battlecry: Your other minions gain Taunt.

describe('SunfuryProtector372', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Sunfury Protector'
                ],
            }
        });

        g.play(g.hand(0, 'Sunfury Protector'), 0, '{}');

        // TODO
    });

});
