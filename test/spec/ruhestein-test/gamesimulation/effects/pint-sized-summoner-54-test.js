/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Pint-Sized Summoner; The first minion you play each turn costs (2) less.

describe('PintSizedSummoner54', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Pint-Sized Summoner'
                ],
            }
        });

        g.play(g.hand(0, 'Pint-Sized Summoner'), 0, '{}');

        // TODO
    });

});
