/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Noble Sacrifice; Secret: When an enemy attacks, summon a 2/1 Defender as the new target.

var NobleSacrifice158 = {

    cardFilters: {
        summon: {
            name: 'Defender',
            attack: 2,
            health: 1,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Secret: When an enemy attacks, summon a 2/1 Defender as the new target.');
    },

    cast: function() {
        // nop
    },

    castSecret: function() {
        var willPlayCard = function(info) {
            var player = this.getPlayer();
            if (info.player === player) {
                // nop
            } else if (!info.attack) {
                // nop
            } else if (!info.targetCard) {
                // nop
            } else if (info.targetCard.getOwner() !== player) {
                // nop
            } else {
                this.getCard().triggerSecret(null, info);
            }
        };

        this.listenToGame('willPlayCard', willPlayCard);
    },

    triggerSecret: function(info) {
        var card = this.createNamedCard('summon');
        this.summonCard(card);

        info.info.targetCard = card;
    }

};



exports.NobleSacrifice158 = NobleSacrifice158;
