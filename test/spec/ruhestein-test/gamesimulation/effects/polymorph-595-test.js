/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Polymorph; Transform a minion into a 1/1 Sheep.

describe('Polymorph595', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Malygos',
                ],
                playCards: 1,
            },
            player2: {
                deck: [
                    '1 Polymorph'
                ],
            }
        });

        g.play(g.hand(0, 'Polymorph'), g.oBattlefield(0, '4/12 Malygos'), '{Dead}', '1/1 Sheep');

        // TODO
    });

});
