/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 4/3 Argent Commander; Charge. Divine Shield

describe('ArgentCommander463', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Argent Commander'
                ],
            }
        });

        g.play(g.hand(0, 'Argent Commander'), 0, '{}');

        // TODO
    });

});
