/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Shapeshift; Hero Power +1 Attack this turn.  +1 Armor.

describe('Shapeshift185', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'druid',
                deck: [
                ],
            }
        });

        g.hero('0/30 [0]');
        g.play(g.heroPower('Shapeshift'), null);
        g.hero('1/30 [1]');
        g.endTurn();

        g.oHero('0/30 [1]');
        g.endTurn();

        g.hero('0/30 [1]');
        g.play(g.heroPower('Shapeshift'), null);
        g.hero('1/30 [2]');
        g.endTurn();

        g.oHero('0/30 [2]');
    });

});
