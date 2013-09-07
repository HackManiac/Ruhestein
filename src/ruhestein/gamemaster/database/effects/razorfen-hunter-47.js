/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/3 Razorfen Hunter; Battlecry: Summon a 1/1 Boar.

var RazorfenHunter47 = {

    cardFilters: {
        summon: {
            name: 'Boar',
            attack: 1,
            health: 1,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon a 1/1 Boar.');
    },

    cast: function() {
        // nop
    },

    castBattlecry: function() {
        var card = this.createNamedCard('summon');
        this.summonCard(card);
    }

};



exports.RazorfenHunter47 = RazorfenHunter47;
