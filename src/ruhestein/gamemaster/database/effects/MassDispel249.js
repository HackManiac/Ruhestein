/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MassDispel249 = {

    getDescription: function() {
        return this.formatDescription('Silence all enemy minions. Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MassDispel249"');
    },

};



exports.MassDispel249 = MassDispel249;
