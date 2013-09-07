/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Polymorph; Transform a minion into a 1/1 Sheep.

describe('Polymorph595', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Polymorph'
                ],
            }
        });

        g.play(g.hand(0, 'Polymorph'), 0, '{}');

        // TODO
    });

});
