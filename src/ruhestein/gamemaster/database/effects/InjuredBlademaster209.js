/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/7 Injured Blademaster; Battlecry: Deal 4 damage to HIMSELF.

var InjuredBlademaster209 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 4 damage to HIMSELF.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "InjuredBlademaster209"');
    },

};



exports.InjuredBlademaster209 = InjuredBlademaster209;
