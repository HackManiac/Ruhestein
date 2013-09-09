/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Wild Growth; Gain an empty Mana Crystal.

var WildGrowth282 = {

    getDescription: function() {
        return this.formatDescription('Gain an empty Mana Crystal.');
    },

    cast: function() {
        var player = this.getPlayer();
        player.modifyBaseMana(1);
        player.modifyMaxMana(1);
    }

};



exports.WildGrowth282 = WildGrowth282;
