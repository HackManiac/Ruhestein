/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Life Tap; Hero Power  Draw a card and take 2 damage.

describe('LifeTap20', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'warlock',
                deck: [
                ],
            }
        });

        g.hero('0/30');
        expect(g.game.getHandCardCount()).to.equal(4);
        g.play(g.heroPower('Life Tap'), null);
        g.hero('0/28');
        expect(g.game.getHandCardCount()).to.equal(5);
    });

});
