/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Bear Form; +2 Health and Taunt.

var BearForm662 = {

    cardFilters: {
        summon: {
            name: 'Druid of the Claw',
            attack: 4,
            health: 6,
            isToken: true
        }
    },

    getDescription: function() {
        return this.formatDescription('+2 Health and Taunt.');
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



exports.BearForm662 = BearForm662;
