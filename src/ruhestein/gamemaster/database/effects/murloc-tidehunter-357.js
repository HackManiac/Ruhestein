/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/1 Murloc Tidehunter; Battlecry: Summon a 1/1 Murloc Scout.

var MurlocTidehunter357 = {

    cardFilters: {
        summon: {
            name: 'Murloc Scout',
            attack: 1,
            health: 1,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon a 1/1 Murloc Scout.');
    },

    cast: function() {
        // nop
    },

    castBattlecry: function() {
        var card = this.createNamedCard('summon');
        this.summonCard(card);
    }

};



exports.MurlocTidehunter357 = MurlocTidehunter357;
