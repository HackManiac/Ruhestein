/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Cold Blood; Give a minion +2 Attack. Combo: +4 Attack instead.

describe('ColdBlood92', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Cold Blood'
                ],
            }
        });

        g.play(g.hand(0, 'Cold Blood'), 0, '{}');

        // TODO
    });

});
