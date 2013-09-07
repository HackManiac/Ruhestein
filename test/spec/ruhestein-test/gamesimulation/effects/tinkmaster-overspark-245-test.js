/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/2 Tinkmaster Overspark; Battlecry: Transform a minion into a 5/5 Devilsaur or a 1/1 Squirrel at random.

describe('TinkmasterOverspark245', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Tinkmaster Overspark'
                ],
            }
        });

        g.play(g.hand(0, 'Tinkmaster Overspark'), 0, '{}');

        // TODO
    });

});
