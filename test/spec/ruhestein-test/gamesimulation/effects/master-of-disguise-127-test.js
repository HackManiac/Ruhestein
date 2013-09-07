/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 4/4 Master of Disguise; Battlecry: Give a friendly minion Stealth.

describe('MasterOfDisguise127', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Master of Disguise'
                ],
            }
        });

        g.play(g.hand(0, 'Master of Disguise'), 0, '{}');

        // TODO
    });

});
