/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Shotgun Blast; Hero Power  Deal 1 damage.

describe('ShotgunBlast580', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shotgun Blast'
                ],
            }
        });

        g.play(g.hand(0, 'Shotgun Blast'), 0, '{}');

        // TODO
    });

});
