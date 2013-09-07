/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/2 Murloc Tidecaller; Whenever a Murloc is summoned, gain +1 Attack.

describe('MurlocTidecaller420', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Murloc Tidecaller'
                ],
            }
        });

        g.play(g.hand(0, 'Murloc Tidecaller'), 0, '{}');

        // TODO
    });

});
