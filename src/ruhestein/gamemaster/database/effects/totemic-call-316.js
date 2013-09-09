/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Totemic Call; Hero Power  Summon a random Totem.

var TotemicCall316 = {

    cardFilters: {
        summon1: {
            name: 'Healing Totem',
            attack: 0,
            health: 2,
            isToken: true
        },
        summon2: {
            name: 'Searing Totem',
            attack: 1,
            health: 1,
            isToken: true
        },
        summon3: {
            name: 'Stoneclaw Totem',
            attack: 0,
            health: 2,
            isToken: true
        },
        summon4: {
            name: 'Wrath of Air Totem',
            attack: 0,
            health: 2,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Hero Power  Summon a random Totem.');
    },

    cast: function() {
        var cards = this.collectCardsByLocation('battlefield', function(card) {
            return card.isTotem();
        });

        var name, iterator = function(card) {
            return (card.getName() === name);
        };
            
        var candidateKeys = [];
        for (var i = 0; i < 4; i++) {
            var key = 'summon' + (i + 1);
            name = this.cardFilters [key].name;
            var result = cards.some(iterator);
            if (!result) {
                candidateKeys.push(key);
            }
        }

        if (candidateKeys.length > 0) {
            var index = this.getGame().roll(candidateKeys.length) - 1;
            var card = this.createNamedCard(candidateKeys [index]);
            this.summonCard(card);
        }
    },

};



exports.TotemicCall316 = TotemicCall316;
