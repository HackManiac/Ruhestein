/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/1 Blood Imp; Stealth. Your other minions have +1 Health.

describe('BloodImp196', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Blood Imp'
                ],
            }
        });

        g.play(g.hand(0, 'Blood Imp'), 0, '{}');

        // TODO
    });

});
