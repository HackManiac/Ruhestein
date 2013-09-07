/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Starving Buzzard; Whenever you summon a Beast, draw a card.

describe('StarvingBuzzard101', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Starving Buzzard'
                ],
            }
        });

        g.play(g.hand(0, 'Starving Buzzard'), 0, '{}');

        // TODO
    });

});
