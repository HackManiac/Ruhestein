/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 4/4 Ogre Magi; Spell Power +1

describe('OgreMagi659', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ogre Magi'
                ],
            }
        });

        expect(g.game.getSpellPower()).to.equal(0);
        g.play(g.hand(0, 'Ogre Magi'), 0, '{ZZZ}');
        expect(g.game.getSpellPower()).to.equal(1);
        g.test.kill(g.battlefield(0));
        expect(g.game.getSpellPower()).to.equal(0);
    });

});
