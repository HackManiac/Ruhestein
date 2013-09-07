/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var TotemicMight367 = {

    getDescription: function() {
        return this.formatDescription('Give your Totems +2 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TotemicMight367"');
    },

};



exports.TotemicMight367 = TotemicMight367;
