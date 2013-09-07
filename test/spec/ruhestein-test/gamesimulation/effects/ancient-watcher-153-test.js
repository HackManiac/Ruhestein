/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 4/5 Ancient Watcher; Can't Attack.

describe('AncientWatcher153', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ancient Watcher'
                ],
            }
        });

        g.play(g.hand(0, 'Ancient Watcher'), 0, '{}');

        // TODO
    });

});
