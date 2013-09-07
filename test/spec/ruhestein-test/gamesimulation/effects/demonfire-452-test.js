/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Demonfire; Deal 2 damage to a minion.   If it’s a friendly Demon, give it +2/+2 instead.

describe('Demonfire452', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Demonfire'
                ],
            }
        });

        g.play(g.hand(0, 'Demonfire'), 0, '{}');

        // TODO
    });

});
