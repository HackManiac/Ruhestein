/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 3/3 Faceless Manipulator; Battlecry: Choose a minion and become a copy of it.

describe('FacelessManipulator450', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Faceless Manipulator'
                ],
            }
        });

        g.play(g.hand(0, 'Faceless Manipulator'), 0, '{}');

        // TODO
    });

});
