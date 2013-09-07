/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/4 Silver Hand Knight; Battlecry: Summon a 2/2 Squire.

describe('SilverHandKnight648', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Silver Hand Knight'
                ],
            }
        });

        g.play(g.hand(0, 'Silver Hand Knight'), 0, '{}');

        // TODO
    });

});
