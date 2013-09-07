/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 4/5 Cairne Bloodhoof; Deathrattle: Summon a 4/5 Baine Bloodhoof.

describe('CairneBloodhoof498', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Cairne Bloodhoof'
                ],
            }
        });

        g.play(g.hand(0, 'Cairne Bloodhoof'), 0, '{}');

        // TODO
    });

});
