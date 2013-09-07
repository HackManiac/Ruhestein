/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Silence544 = {

    getDescription: function() {
        return this.formatDescription('Silence a minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Silence544"');
    },

};



exports.Silence544 = Silence544;
