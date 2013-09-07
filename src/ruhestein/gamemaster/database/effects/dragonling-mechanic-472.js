/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 2/4 Dragonling Mechanic; Battlecry: Summon a 2/1 Mechanical Dragonling.

var DragonlingMechanic472 = {

    cardFilters: {
        summon: {
            name: 'Mechanical Dragonling',
            attack: 2,
            health: 1,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon a 2/1 Mechanical Dragonling.');
    },

    castBattlecry: function() {
        var card = this.createNamedCard('summon');
        this.summonCard(card);
    },

};



exports.DragonlingMechanic472 = DragonlingMechanic472;
