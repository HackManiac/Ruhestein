/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Equality; Change the Health of ALL minions to 1.

describe('Equality383', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Malygos'
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Equality'
                ],
                playCards: 1
            }
        });

        g.battlefield(0, '4/12 Malygos');
        g.oBattlefield(0, '4/12 Malygos');
        g.play(g.hand(0, 'Equality'), null, '{Dead}');
        g.battlefield(0, '4/1 Malygos');
        g.oBattlefield(0, '4/1 Malygos');
    });

});
