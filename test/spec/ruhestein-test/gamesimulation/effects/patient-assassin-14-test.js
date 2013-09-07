/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/1 Patient Assassin; Stealth. Destroy any minion damaged by this minion.

describe('PatientAssassin14', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Patient Assassin'
                ],
            }
        });

        g.play(g.hand(0, 'Patient Assassin'), 0, '{}');

        // TODO
    });

});
