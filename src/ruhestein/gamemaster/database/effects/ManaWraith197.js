/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ManaWraith197 = {

    getDescription: function() {
        return this.formatDescription('ALL minions cost (1) more.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ManaWraith197"');
    },

};



exports.ManaWraith197 = ManaWraith197;
