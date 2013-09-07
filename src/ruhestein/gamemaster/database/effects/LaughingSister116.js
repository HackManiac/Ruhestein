/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var LaughingSister116 = {

    getDescription: function() {
        return this.formatDescription('Can\'t be targeted by Spells or Hero Powers.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LaughingSister116"');
    },

};



exports.LaughingSister116 = LaughingSister116;
