/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 3/3 Arathi Weaponsmith; Battlecry: Equip a 2/2 weapon.

var ArathiWeaponsmith504 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Equip a 2/2 weapon.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArathiWeaponsmith504"');
    },

};



exports.ArathiWeaponsmith504 = ArathiWeaponsmith504;
