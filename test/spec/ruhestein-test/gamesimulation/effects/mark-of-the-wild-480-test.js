/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Mark of the Wild; Give a minion Taunt and +2/+2. (+2 Attack/+2 Health)

describe('MarkOfTheWild480', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mark of the Wild'
                ],
            }
        });

        g.play(g.hand(0, 'Mark of the Wild'), 0, '{}');

        // TODO
    });

});
