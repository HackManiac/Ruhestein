/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Dagger Mastery; Hero Power  Equip a 1/2 Dagger; or Give your weapon +1 Attack this turn.

var DaggerMastery201 = {

    cardFilters: {
        weapon: {
            name: 'Wicked Knife',
            attack: 1,
            health: 2,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Hero Power  Equip a 1/2 Dagger; or Give your weapon +1 Attack this turn.');
    },

    cast: function() {
        var weapon = this.getPlayer().getWeapon();
        if (weapon) {
            var buff = this.buffCard(weapon);

            this.onEndOfNextPlayerTurn(function() {
                buff.uncast();
            });
        } else {
            var card = this.createNamedCard('weapon');
            this.summonCard(card);
        }
    },

    buff: {
        currentAttack: 1
    }

};



exports.DaggerMastery201 = DaggerMastery201;
