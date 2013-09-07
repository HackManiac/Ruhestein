/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var FrostNova49 = {

    getDescription: function() {
        return this.formatDescription('Freeze all enemy minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FrostNova49"');
    },

};



exports.FrostNova49 = FrostNova49;
