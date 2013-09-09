/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Hex; Transform a minion into a 0/1 Frog with Taunt.

var Hex270 = {

    cardFilters: {
        frog: {
            name: 'Frog',
            attack: 0,
            health: 1,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Transform a minion into a 0/1 Frog with Taunt.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        var card = this.createNamedCard('frog');
        target.transformTo(card);
    },

};



exports.Hex270 = Hex270;
