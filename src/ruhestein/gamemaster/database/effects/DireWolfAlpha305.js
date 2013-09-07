/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DireWolfAlpha305 = {

    getDescription: function() {
        return this.formatDescription('Adjacent minions have +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DireWolfAlpha305"');
    },

};



exports.DireWolfAlpha305 = DireWolfAlpha305;
