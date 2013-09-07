/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/3 Void Terror; Battlecry: Destroy the minions on either side of this minion and gain their Attack and Health.

var VoidTerror119 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy the minions on either side of this minion and gain their Attack and Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "VoidTerror119"');
    },

};



exports.VoidTerror119 = VoidTerror119;
