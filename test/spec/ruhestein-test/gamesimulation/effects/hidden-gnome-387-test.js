/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/3 Hidden Gnome; Was hiding in a barrel!

describe('HiddenGnome387', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Hidden Gnome'
                ],
            }
        });

        g.play(g.hand(0, 'Hidden Gnome'), 0, '{}');

        // TODO
    });

});
