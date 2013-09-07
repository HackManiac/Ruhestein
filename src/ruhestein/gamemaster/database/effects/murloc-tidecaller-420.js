/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/2 Murloc Tidecaller; Whenever a Murloc is summoned, gain +1 Attack.

var MurlocTidecaller420 = {

    getDescription: function() {
        return this.formatDescription('Whenever a Murloc is summoned, gain +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MurlocTidecaller420"');
    },

};



exports.MurlocTidecaller420 = MurlocTidecaller420;
