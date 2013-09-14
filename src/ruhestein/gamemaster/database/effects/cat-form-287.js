/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Cat Form; Charge

var CatForm287 = {

    cardFilters: {
        summon: {
            name: 'Druid of the Claw',
            attack: 4,
            health: 4,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    targetLocations: 'battlefield',

    targetFilter: function(card) {
        return (card.getName() === 'Druid of the Claw');
    },

    cast: function(target) {
        var card = this.createNamedCard('summon');
        target.transformTo(card);
    }

};



exports.CatForm287 = CatForm287;
