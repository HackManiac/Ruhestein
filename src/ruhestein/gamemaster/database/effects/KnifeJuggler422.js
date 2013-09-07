/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 3/2 Knife Juggler; After you summon a minion, deal 1 damage to a random enemy.

var KnifeJuggler422 = {

    getDescription: function() {
        return this.formatDescription('After you summon a minion, deal 1 damage to a random enemy.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "KnifeJuggler422"');
    },

};



exports.KnifeJuggler422 = KnifeJuggler422;
