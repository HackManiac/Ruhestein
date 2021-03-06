/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Ironfur Grizzly; Taunt

describe('IronfurGrizzly519', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ironfur Grizzly'
                ],
            }
        });

        g.play(g.hand(0, 'Ironfur Grizzly'), 0, '{Taunt,ZZZ}');
    });

});
