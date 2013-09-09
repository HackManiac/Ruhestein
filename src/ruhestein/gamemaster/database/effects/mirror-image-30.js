/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Mirror Image; Summon two 0/1 minions with Taunt.

var MirrorImage30 = {

    cardFilters: {
        summon: {
            name: 'Mirror Image',
            attack: 0,
            health: 1,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Summon two 0/1 minions with Taunt.');
    },

    cast: function() {
        for (var i = 0; i < 2; i++) {
            var card = this.createNamedCard('summon');
            this.summonCard(card);
        }
    }

};



exports.MirrorImage30 = MirrorImage30;
