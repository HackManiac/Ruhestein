/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MurlocTidecaller420 = {

    getDescription: function() {
        return this.formatDescription('Whenever a Murloc is summoned, gain +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MurlocTidecaller420"');
    },

};



exports.MurlocTidecaller420 = MurlocTidecaller420;
