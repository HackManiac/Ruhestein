/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SacrificialPact348 = {

    getDescription: function() {
        return this.formatDescription('Destroy a Demon. Restore #5 Health to your hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SacrificialPact348"');
    },

};



exports.SacrificialPact348 = SacrificialPact348;
