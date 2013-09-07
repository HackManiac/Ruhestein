/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var EmperorCobra625 = {

    getDescription: function() {
        return this.formatDescription('Destroy any minion damaged by this minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "EmperorCobra625"');
    },

};



exports.EmperorCobra625 = EmperorCobra625;
