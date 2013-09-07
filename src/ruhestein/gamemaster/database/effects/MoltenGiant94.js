/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MoltenGiant94 = {

    getDescription: function() {
        return this.formatDescription('Costs (1) less for each damage your hero has taken.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MoltenGiant94"');
    },

};



exports.MoltenGiant94 = MoltenGiant94;
