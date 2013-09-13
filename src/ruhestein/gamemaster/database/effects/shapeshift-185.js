/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Shapeshift; Hero Power +1 Attack this turn.  +1 Armor.

var Shapeshift185 = {

    getDescription: function() {
        return this.formatDescription('Hero Power +1 Attack this turn.  +1 Armor.');
    },

    cast: function() {
        var player = this.getPlayer();

        var buff = this.buffCard(player.getHero());

        this.onEndOfNextPlayerTurn(function() {
            buff.uncast();
        });

        player.modifyCurrentArmor(1);
    },

    buff: {
        currentAttack: 1
    }

};



exports.Shapeshift185 = Shapeshift185;
