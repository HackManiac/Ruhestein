/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 1/3 Master Swordsmith; At the end of your turn, give another random friendly minion +1 Attack.

var MasterSwordsmith584 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, give another random friendly minion +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MasterSwordsmith584"');
    },

};



exports.MasterSwordsmith584 = MasterSwordsmith584;
