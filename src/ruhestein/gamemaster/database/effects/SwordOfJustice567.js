/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From weapon card: (3) 1/5 Sword of Justice; Whenever you summon a minion, give it +1/+1 and this loses 1 Durability.

var SwordOfJustice567 = {

    getDescription: function() {
        return this.formatDescription('Whenever you summon a minion, give it +1/+1 and this loses 1 Durability.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SwordOfJustice567"');
    },

};



exports.SwordOfJustice567 = SwordOfJustice567;
