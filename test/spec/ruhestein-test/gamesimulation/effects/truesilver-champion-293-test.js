/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From weapon card: (4) 4/2 Truesilver Champion; Whenever your hero attacks, restore 2 Health to it.

describe('TruesilverChampion293', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Truesilver Champion'
                ],
            }
        });

        g.play(g.hand(0, 'Truesilver Champion'), 0, '{}');

        // TODO
    });

});
