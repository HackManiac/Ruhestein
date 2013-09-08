/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Animal Companion; Summon a random Beast Companion.

var AnimalCompanion578 = {

    cardFilters: {
        summon1: {
            name: 'Misha',
            attack: 4,
            health: 4,
            isToken: true
        },
        summon2: {
            name: 'Leokk',
            attack: 2,
            health: 4,
            isToken: true
        },
        summon3: {
            name: 'Huffer',
            attack: 4,
            health: 2,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Summon a random Beast Companion.');
    },

    cast: function() {
        var suffix = this.getGame().roll(3);
        var card = this.createNamedCard('summon' + suffix);
        this.summonCard(card);
    }

};



exports.AnimalCompanion578 = AnimalCompanion578;
