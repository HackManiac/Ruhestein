/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/3 Emperor Cobra; Destroy any minion damaged by this minion.

var EmperorCobra625 = {

    getDescription: function() {
        return this.formatDescription('Destroy any minion damaged by this minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "EmperorCobra625"');
    },

};



exports.EmperorCobra625 = EmperorCobra625;
