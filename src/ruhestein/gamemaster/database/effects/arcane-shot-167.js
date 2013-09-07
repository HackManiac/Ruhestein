/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Arcane Shot; Deal 2 damage.

var ArcaneShot167 = {

    basePower: 2,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage.');
    },

    targetLocations: 'allCharacters',

    cast: function(target) {
        var damage = this.getCurrentPower();
        this.dealDamage(damage, target);
    },

};



exports.ArcaneShot167 = ArcaneShot167;
