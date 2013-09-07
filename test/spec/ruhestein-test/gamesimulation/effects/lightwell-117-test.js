/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 0/5 Lightwell; At the start of your turn, restore 3 Health to a damaged friendly character.

describe('Lightwell117', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Lightwell'
                ],
            }
        });

        g.play(g.hand(0, 'Lightwell'), 0, '{}');

        // TODO
    });

});
