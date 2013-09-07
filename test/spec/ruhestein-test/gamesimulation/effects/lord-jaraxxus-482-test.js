/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (9) 3/15 Lord Jaraxxus; Battlecry: Destroy your hero and replace him with Lord Jaraxxus.

describe('LordJaraxxus482', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Lord Jaraxxus'
                ],
            }
        });

        g.play(g.hand(0, 'Lord Jaraxxus'), 0, '{}');

        // TODO
    });

});
