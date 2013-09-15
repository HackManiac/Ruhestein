/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/4 Silver Hand Knight; Battlecry: Summon a 2/2 Squire.

var SilverHandKnight648 = {

    cardFilters: {
        summon: {
            name: 'Squire',
            attack: 2,
            health: 2,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon a 2/2 Squire.');
    },

    castBattlecry: function() {
        var card = this.createNamedCard('summon');
        this.summonCard(card);
    }

};



exports.SilverHandKnight648 = SilverHandKnight648;
