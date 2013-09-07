/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Blessing of Might; Give a minion +3 Attack.

var BlessingOfMight394 = {

    getDescription: function() {
        return this.formatDescription('Give a minion +3 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BlessingOfMight394"');
    },

};



exports.BlessingOfMight394 = BlessingOfMight394;
