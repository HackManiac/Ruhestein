/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Elven Archer; Battlecry: Deal 1 damage.

var ElvenArcher356 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 1 damage.');
    },

    targetLocations: 'allCharacters',

    cast: function(target) {
        this.dealDamage(1, target);
    },

};



exports.ElvenArcher356 = ElvenArcher356;
