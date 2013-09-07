/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) INFERNO!; Hero Power  Summon a 6/6 Infernal.

describe('INFERNO83', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 INFERNO!'
                ],
            }
        });

        g.play(g.hand(0, 'INFERNO!'), 0, '{}');

        // TODO
    });

});
