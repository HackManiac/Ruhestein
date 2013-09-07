/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 0/3 Alarm-o-Bot; At the start of your turn, swap this minion with a random one in your hand.

describe('AlarmoBot425', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Alarm-o-Bot'
                ],
            }
        });

        g.play(g.hand(0, 'Alarm-o-Bot'), 0, '{}');

        // TODO
    });

});
