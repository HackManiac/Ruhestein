/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Reinforce; Hero Power  Summon a 1/1 Silver Hand Recruit.

var Reinforce248 = {

    cardFilters: {
        summon: {
            name: 'Silver Hand Recruit',
            attack: 1,
            health: 1,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Hero Power  Summon a 1/1 Silver Hand Recruit.');
    },

    cast: function() {
        var card = this.createNamedCard('summon');
        this.summonCard(card);
    }

};



exports.Reinforce248 = Reinforce248;
