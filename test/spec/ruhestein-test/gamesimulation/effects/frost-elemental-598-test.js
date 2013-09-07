/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 5/5 Frost Elemental; Battlecry: Freeze a character.

describe('FrostElemental598', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Frost Elemental'
                ],
            }
        });

        g.play(g.hand(0, 'Frost Elemental'), 0, '{}');

        // TODO
    });

});
