/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 4/5 Cairne Bloodhoof; Deathrattle: Summon a 4/5 Baine Bloodhoof.

var CairneBloodhoof498 = {

    getDescription: function() {
        return this.formatDescription('Deathrattle: Summon a 4/5 Baine Bloodhoof.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "CairneBloodhoof498"');
    },

};



exports.CairneBloodhoof498 = CairneBloodhoof498;
