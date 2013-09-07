/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 2/4 Old Murk-Eye; Charge. Has +1 Attack for each other Murloc on the battlefield.

describe('OldMurkEye217', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Old Murk-Eye'
                ],
            }
        });

        g.play(g.hand(0, 'Old Murk-Eye'), 0, '{}');

        // TODO
    });

});
