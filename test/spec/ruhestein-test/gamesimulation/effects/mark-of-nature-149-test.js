/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Mark of Nature; Choose One - Give a minion +4 Attack; or +4 Health and Taunt.

describe('MarkOfNature149', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mark of Nature'
                ],
            }
        });

        g.play(g.hand(0, 'Mark of Nature'), 0, '{}');

        // TODO
    });

});
