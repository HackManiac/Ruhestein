/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Frostwolf Grunt; Taunt

describe('FrostwolfGrunt663', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Frostwolf Grunt'
                ],
            }
        });

        g.play(g.hand(0, 'Frostwolf Grunt'), 0, '{Taunt,ZZZ}');
    });

});
