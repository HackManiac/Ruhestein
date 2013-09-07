/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 6/2 Leeroy Jenkins; Charge. Battlecry: Summon two 1/1 Whelps for your opponent.

var LeeroyJenkins674 = {

    getDescription: function() {
        return this.formatDescription('Charge. Battlecry: Summon two 1/1 Whelps for your opponent.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LeeroyJenkins674"');
    },

};



exports.LeeroyJenkins674 = LeeroyJenkins674;
