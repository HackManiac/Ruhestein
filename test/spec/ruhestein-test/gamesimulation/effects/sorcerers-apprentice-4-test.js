/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Sorcerer's Apprentice; Your spells cost (1) less.

describe('SorcerersApprentice4', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Sorcerer\'s Apprentice'
                ],
            }
        });

        g.play(g.hand(0, 'Sorcerer\'s Apprentice'), 0, '{}');

        // TODO
    });

});
