/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Claw; Give your hero +2 Attack this turn and 2 Armor.

var Claw532 = {

    getDescription: function() {
        return this.formatDescription('Give your hero +2 Attack this turn and 2 Armor.');
    },

    cast: function() {
        var player = this.getPlayer();

        var buff = this.buffCard(player.getHero());

        this.onEndOfNextPlayerTurn(function() {
            buff.uncast();
        });

        player.modifyCurrentArmor(2);
    },

    buff: {
        currentAttack: 2
    }

};



exports.Claw532 = Claw532;
