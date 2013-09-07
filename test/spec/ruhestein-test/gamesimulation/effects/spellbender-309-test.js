/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Spellbender; Secret: When an enemy casts a spell on a minion, summon a 1/3 as the new target.

describe('Spellbender309', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Spellbender'
                ],
            }
        });

        g.play(g.hand(0, 'Spellbender'), 0, '{}');

        // TODO
    });

});
