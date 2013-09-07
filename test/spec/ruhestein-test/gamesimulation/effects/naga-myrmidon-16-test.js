/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/1 Naga Myrmidon;  

describe('NagaMyrmidon16', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Naga Myrmidon'
                ],
            }
        });

        g.play(g.hand(0, 'Naga Myrmidon'), 0, '{}');

        // TODO
    });

});
