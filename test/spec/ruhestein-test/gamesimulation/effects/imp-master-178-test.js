/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 1/5 Imp Master; At the end of your turn, deal 1 damage to this minion and summon a 1/1 Imp.

describe('ImpMaster178', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Imp Master'
                ],
            }
        });

        g.play(g.hand(0, 'Imp Master'), 0, '{}');

        // TODO
    });

});
