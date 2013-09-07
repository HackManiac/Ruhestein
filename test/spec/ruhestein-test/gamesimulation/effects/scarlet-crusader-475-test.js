/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/1 Scarlet Crusader; Divine Shield

describe('ScarletCrusader475', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Scarlet Crusader'
                ],
            }
        });

        g.play(g.hand(0, 'Scarlet Crusader'), 0, '{}');

        // TODO
    });

});