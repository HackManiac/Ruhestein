/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Ancient Teachings; Draw 2 cards.

describe('AncientTeachings517', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ancient Teachings'
                ],
            }
        });

        g.play(g.hand(0, 'Ancient Teachings'), 0, '{}');

        // TODO
    });

});
