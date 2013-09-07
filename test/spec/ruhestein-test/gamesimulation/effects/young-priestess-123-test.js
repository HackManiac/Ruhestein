/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 2/1 Young Priestess; At the end of your turn, give another random friendly minion +1 Health.

describe('YoungPriestess123', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Young Priestess'
                ],
            }
        });

        g.play(g.hand(0, 'Young Priestess'), 0, '{}');

        // TODO
    });

});
