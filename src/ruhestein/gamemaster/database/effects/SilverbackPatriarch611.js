/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SilverbackPatriarch611 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SilverbackPatriarch611"');
    },

};



exports.SilverbackPatriarch611 = SilverbackPatriarch611;
