/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 3/5 Violet Teacher; Whenever you cast a spell, summon a 1/1 Violet Apprentice.

describe('VioletTeacher523', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Violet Teacher'
                ],
            }
        });

        g.play(g.hand(0, 'Violet Teacher'), 0, '{}');

        // TODO
    });

});
