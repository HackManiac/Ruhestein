/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Heroic Strike; Give your hero +4 Attack this turn.

describe('HeroicStrike1', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Heroic Strike'
                ],
            }
        });

        g.play(g.hand(0, 'Heroic Strike'), 0, '{}');

        // TODO
    });

});
