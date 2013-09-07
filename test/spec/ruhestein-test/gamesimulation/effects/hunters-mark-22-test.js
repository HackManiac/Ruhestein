/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Hunter's Mark; Change a minion's Health to 1 this turn.

describe('HuntersMark22', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Hunter\'s Mark'
                ],
            }
        });

        g.play(g.hand(0, 'Hunter\'s Mark'), 0, '{}');

        // TODO
    });

});
