/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Rockbiter Weapon; Give a friendly character +3 Attack this turn.

var RockbiterWeapon491 = {

    getDescription: function() {
        return this.formatDescription('Give a friendly character +3 Attack this turn.');
    },

    targetLocations: 'characters',

    cast: function(target) {
        var buff = this.buffCard(target);

        this.onEndOfNextPlayerTurn(function() {
            buff.uncast();
        });
    },

    buff: {
        currentAttack: 3
    }

};



exports.RockbiterWeapon491 = RockbiterWeapon491;
