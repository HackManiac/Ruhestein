/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Hammer of Wrath; Deal 3 damage.  Draw a card.

describe('HammerOfWrath350', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Hammer of Wrath'
                ],
            }
        });

        g.test.playSpellPowerPlus5();

        expect(g.game.getHandCardCount()).to.equal(4);
        g.play(g.hand(0, 'Hammer of Wrath'), g.oHero('0/30'), '{Dead}', '0/22');
        expect(g.game.getHandCardCount()).to.equal(4);
    });

});
