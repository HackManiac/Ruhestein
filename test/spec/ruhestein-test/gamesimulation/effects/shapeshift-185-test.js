/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Shapeshift; Hero Power +1 Attack this turn.  +1 Armor.

describe('Shapeshift185', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shapeshift'
                ],
            }
        });

        g.play(g.hand(0, 'Shapeshift'), 0, '{}');

        // TODO
    });

});
