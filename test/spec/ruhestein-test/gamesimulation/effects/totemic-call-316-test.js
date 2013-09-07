/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Totemic Call; Hero Power  Summon a random Totem.

describe('TotemicCall316', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Totemic Call'
                ],
            }
        });

        g.play(g.hand(0, 'Totemic Call'), 0, '{}');

        // TODO
    });

});
