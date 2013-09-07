/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Dagger Mastery; Hero Power  Equip a 1/2 Dagger; or Give your weapon +1 Attack this turn.

describe('DaggerMastery201', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Dagger Mastery'
                ],
            }
        });

        g.play(g.hand(0, 'Dagger Mastery'), 0, '{}');

        // TODO
    });

});
