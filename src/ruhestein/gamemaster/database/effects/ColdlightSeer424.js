/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ColdlightSeer424 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give ALL other Murlocs +2 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ColdlightSeer424"');
    },

};



exports.ColdlightSeer424 = ColdlightSeer424;
