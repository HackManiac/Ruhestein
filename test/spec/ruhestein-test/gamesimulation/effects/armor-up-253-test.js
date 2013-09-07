/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Armor Up!; Hero Power  Gain 2 Armor.

describe('ArmorUp253', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Armor Up!'
                ],
            }
        });

        g.play(g.hand(0, 'Armor Up!'), 0, '{}');

        // TODO
    });

});
