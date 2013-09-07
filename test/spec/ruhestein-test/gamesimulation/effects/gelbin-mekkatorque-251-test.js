/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 6/6 Gelbin Mekkatorque; Battlecry: Summon an AWESOME invention.

describe('GelbinMekkatorque251', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Gelbin Mekkatorque'
                ],
            }
        });

        g.play(g.hand(0, 'Gelbin Mekkatorque'), 0, '{}');

        // TODO
    });

});
