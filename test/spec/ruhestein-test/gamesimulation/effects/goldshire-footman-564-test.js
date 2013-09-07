/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/2 Goldshire Footman; Taunt

describe('GoldshireFootman564', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Goldshire Footman'
                ],
            }
        });

        g.play(g.hand(0, 'Goldshire Footman'), 0, '{Taunt,ZZZ}');

        // TODO
    });

});
