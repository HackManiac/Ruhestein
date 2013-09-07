/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Flames of Azzinoth; Hero Power  Summon two 2/1 minions.

describe('FlamesOfAzzinoth349', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Flames of Azzinoth'
                ],
            }
        });

        g.play(g.hand(0, 'Flames of Azzinoth'), 0, '{}');

        // TODO
    });

});
