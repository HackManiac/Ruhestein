/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/3 Warsong Commander; Your other minions have Charge.

describe('WarsongCommander193', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Warsong Commander'
                ],
            }
        });

        g.play(g.hand(0, 'Warsong Commander'), 0, '{}');

        // TODO
    });

});
