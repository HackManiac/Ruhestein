/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/1 Ironbeak Owl; Battlecry: Silence a minion.

describe('IronbeakOwl500', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ironbeak Owl'
                ],
            }
        });

        g.play(g.hand(0, 'Ironbeak Owl'), 0, '{}');

        // TODO
    });

});
