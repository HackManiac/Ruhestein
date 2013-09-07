/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/3 Earthen Ring Farseer; Battlecry: Restore 3 Health.

var EarthenRingFarseer557 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Restore 3 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "EarthenRingFarseer557"');
    },

};



exports.EarthenRingFarseer557 = EarthenRingFarseer557;
