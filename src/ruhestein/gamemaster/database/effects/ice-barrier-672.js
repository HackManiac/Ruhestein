/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Ice Barrier; Secret: As soon as your hero is attacked, gain 8 Armor.

var IceBarrier672 = {

    getDescription: function() {
        return this.formatDescription('Secret: As soon as your hero is attacked, gain 8 Armor.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "IceBarrier672"');
    },

};



exports.IceBarrier672 = IceBarrier672;
