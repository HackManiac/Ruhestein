/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/1 Timber Wolf; Your other Beasts have +1 Attack.

describe('TimberWolf86', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Timber Wolf'
                ],
            }
        });

        g.play(g.hand(0, 'Timber Wolf'), 0, '{}');

        // TODO
    });

});
