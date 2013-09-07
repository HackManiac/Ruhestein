/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var VentureCoMercenary509 = {

    getDescription: function() {
        return this.formatDescription('Your minions cost (3) more.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "VentureCoMercenary509"');
    },

};



exports.VentureCoMercenary509 = VentureCoMercenary509;
