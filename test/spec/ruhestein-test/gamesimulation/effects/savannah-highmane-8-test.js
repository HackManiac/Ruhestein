/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 6/5 Savannah Highmane; Deathrattle: Summon two 2/2 Hyenas.

describe('SavannahHighmane8', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Savannah Highmane'
                ],
            }
        });

        g.play(g.hand(0, 'Savannah Highmane'), 0, '{}');

        // TODO
    });

});
