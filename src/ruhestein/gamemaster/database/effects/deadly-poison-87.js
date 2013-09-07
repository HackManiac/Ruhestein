/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Deadly Poison; Give your weapon +2 Attack.

var DeadlyPoison87 = {

    getDescription: function() {
        return this.formatDescription('Give your weapon +2 Attack.');
    },

    cast: function() {
        this.castBuff(this.getPlayer().getWeapon());
    },

    buff: {
        currentAttack: 2
    }

};



exports.DeadlyPoison87 = DeadlyPoison87;
