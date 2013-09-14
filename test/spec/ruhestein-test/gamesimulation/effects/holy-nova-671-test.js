/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Holy Nova; Deal 2 damage to all enemies.  Restore #2 Health to all  friendly characters.

describe('HolyNova671', function() {

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
                    '1 Holy Nova'
                ],
                playCards: 1
            }
        });

        g.test.dealDamage(10, g.hero('0/30'), '0/20');
        g.test.dealDamage(10, g.battlefield(0, '4/12'), '4/2');

        g.oHero('0/30');
        g.oBattlefield(0, '4/12');
        g.play(g.hand(0, 'Holy Nova'), null, '{Dead}');
        g.hero('0/22');
        g.battlefield(0, '4/4');
        g.oHero('0/23');
        g.oBattlefield(0, '4/5');
    });

});
