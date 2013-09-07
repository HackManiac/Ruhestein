/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Cone of Cold; Freeze a minion and the minions next to it, and deal 1 damage to them.

var ConeOfCold26 = {

    getDescription: function() {
        return this.formatDescription('Freeze a minion and the minions next to it, and deal 1 damage to them.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ConeOfCold26"');
    },

};



exports.ConeOfCold26 = ConeOfCold26;
