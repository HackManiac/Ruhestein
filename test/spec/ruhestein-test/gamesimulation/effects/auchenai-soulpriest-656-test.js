/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 3/5 Auchenai Soulpriest; Your cards and powers that restore Health now deal damage instead.

describe('AuchenaiSoulpriest656', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Auchenai Soulpriest'
                ],
            }
        });

        g.play(g.hand(0, 'Auchenai Soulpriest'), 0, '{}');

        // TODO
    });

});
