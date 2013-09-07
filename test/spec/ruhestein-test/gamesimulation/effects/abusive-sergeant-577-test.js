/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 2/1 Abusive Sergeant; Battlecry: Give a friendly minion +2 Attack this turn.

describe('AbusiveSergeant577', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Abusive Sergeant'
                ],
            }
        });

        g.play(g.hand(0, 'Abusive Sergeant'), 0, '{}');

        // TODO
    });

});
