/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Dagger Mastery; Hero Power  Equip a 1/2 Dagger; or Give your weapon +1 Attack this turn.

describe('DaggerMastery201', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'rogue',
                deck: [
                ],
            }
        });

        g.weapon(null);
        g.play(g.heroPower('Dagger Mastery'), 0, '{}');
        g.weapon('1/2 Wicked Knife');

        g.endTurn();
        g.endTurn();

        g.play(g.heroPower('Dagger Mastery'), 0, '{}');
        g.weapon('2/2 Wicked Knife');

        g.endTurn();
        g.endTurn();

        g.weapon('1/2 Wicked Knife');
    });

});
