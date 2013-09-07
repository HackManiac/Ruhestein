/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Hogger SMASH!; Deal 4 damage.

var HoggerSMASH443 = {

    getDescription: function() {
        return this.formatDescription('Deal 4 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HoggerSMASH443"');
    },

};



exports.HoggerSMASH443 = HoggerSMASH443;
