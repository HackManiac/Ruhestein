/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Reinforce; Hero Power  Summon a 1/1 Silver Hand Recruit.

describe('Reinforce248', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Reinforce'
                ],
            }
        });

        g.play(g.hand(0, 'Reinforce'), 0, '{}');

        // TODO
    });

});
