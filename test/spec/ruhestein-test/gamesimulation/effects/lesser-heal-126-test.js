/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Lesser Heal; Hero Power  Restore 2 Health.

describe('LesserHeal126', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Lesser Heal'
                ],
            }
        });

        g.play(g.hand(0, 'Lesser Heal'), 0, '{}');

        // TODO
    });

});
