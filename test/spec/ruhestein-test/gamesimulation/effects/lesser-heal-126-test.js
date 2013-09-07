/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Lesser Heal; Hero Power  Restore 2 Health.

describe('LesserHeal126', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'priest',
                deck: [
                ],
            }
        });

        g.test.dealDamage(3, g.hero('0/30'), '0/27');
        g.play(g.heroPower('Lesser Heal'), g.hero('0/27'), '{}', '0/29');

        g.endTurn();
        g.endTurn();

        g.play(g.heroPower('Lesser Heal'), g.hero('0/29'), '{}', '0/30');

        g.endTurn();
        g.endTurn();

        g.play(g.heroPower('Lesser Heal'), g.hero('0/30'), '{}', '0/30');
    });

});
