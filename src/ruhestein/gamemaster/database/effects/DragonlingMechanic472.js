/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DragonlingMechanic472 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon a 2/1 Mechanical Dragonling.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DragonlingMechanic472"');
    },

};



exports.DragonlingMechanic472 = DragonlingMechanic472;
