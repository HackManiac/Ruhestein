/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var VoodooDoctor410 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Restore 2 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "VoodooDoctor410"');
    },

};



exports.VoodooDoctor410 = VoodooDoctor410;
