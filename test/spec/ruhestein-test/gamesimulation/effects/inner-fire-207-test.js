/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Inner Fire; Change a minion's Attack to be equal to its Health.

describe('InnerFire207', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Inner Fire'
                ],
            }
        });

        g.play(g.hand(0, 'Inner Fire'), 0, '{}');

        // TODO
    });

});
