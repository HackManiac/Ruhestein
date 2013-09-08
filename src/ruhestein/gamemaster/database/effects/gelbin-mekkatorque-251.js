/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 6/6 Gelbin Mekkatorque; Battlecry: Summon an AWESOME invention.

var GelbinMekkatorque251 = {

    cardFilters: {
        summon1: {
            name: 'Repair Bot',
            attack: 0,
            health: 5,
            isToken: true
        },
        summon2: {
            name: 'Poultryizer',
            attack: 0,
            health: 3,
            isToken: true
        },
        summon3: {
            name: 'Homing Chicken',
            attack: 0,
            health: 1,
            isToken: true
        },
        summon4: {
            name: 'Emboldener 3000',
            attack: 0,
            health: 4,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon an AWESOME invention.');
    },

    cast: function() {
        var suffix = this.getGame().roll(4);
        var card = this.createNamedCard('summon' + suffix);
        this.summonCard(card);
    },

};



exports.GelbinMekkatorque251 = GelbinMekkatorque251;
