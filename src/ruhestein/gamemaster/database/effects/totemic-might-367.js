/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Totemic Might; Give your Totems +2 Health.

var TotemicMight367 = {

    getDescription: function() {
        return this.formatDescription('Give your Totems +2 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TotemicMight367"');
    },

};



exports.TotemicMight367 = TotemicMight367;
