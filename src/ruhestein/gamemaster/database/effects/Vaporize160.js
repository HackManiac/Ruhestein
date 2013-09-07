/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Vaporize160 = {

    getDescription: function() {
        return this.formatDescription('Secret: When a minion attacks your hero, destroy it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Vaporize160"');
    },

};



exports.Vaporize160 = Vaporize160;
