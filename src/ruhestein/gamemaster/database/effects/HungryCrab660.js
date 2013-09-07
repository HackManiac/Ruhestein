/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var HungryCrab660 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy a Murloc and gain +2/+2.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HungryCrab660"');
    },

};



exports.HungryCrab660 = HungryCrab660;
