/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Bloodlust; Give your minions +3 Attack this turn.

describe('Bloodlust256', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Bloodlust'
                ],
                playCards: 1
            }
        });

        g.hero('0/30');
        g.battlefield(0, '4/12');

        g.play(g.hand(0, 'Bloodlust'), null, '{Dead}');

        g.hero('0/30');
        g.battlefield(0, '7/12');

        g.endTurn();

        g.hero('0/30');
        g.oBattlefield(0, '4/12');

        g.endTurn();

        g.hero('0/30');
        g.battlefield(0, '4/12');
    });

});
