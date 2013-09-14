/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 4/4 Hogger; At the end of your turn, summon a 2/2 Gnoll with Taunt.

var Hogger39 = {

    cardFilters: {
        summon: {
            name: 'Gnoll',
            attack: 2,
            health: 2,
            isToken: true
        }
    },
    
    getDescription: function() {
        return this.formatDescription('At the end of your turn, summon a 2/2 Gnoll with Taunt.');
    },

    cast: function() {
        this.onEndOfPlayerTurn(function() {
            var card = this.createNamedCard('summon');
            this.summonCard(card);
        });
    }

};



exports.Hogger39 = Hogger39;
