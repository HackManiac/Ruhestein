/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var HiddenGnome387 = {

    getDescription: function() {
        return this.formatDescription('Was hiding in a barrel!');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HiddenGnome387"');
    },

};



exports.HiddenGnome387 = HiddenGnome387;
