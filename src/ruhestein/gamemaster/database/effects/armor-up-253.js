/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Armor Up!; Hero Power  Gain 2 Armor.

var ArmorUp253 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Gain 2 Armor.');
    },

    cast: function() {
        this.getPlayer().modifyCurrentArmor(2);
    }

};



exports.ArmorUp253 = ArmorUp253;
