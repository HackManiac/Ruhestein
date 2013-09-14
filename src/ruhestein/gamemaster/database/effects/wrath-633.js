/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Wrath; Choose One - Deal 3 damage; or Deal 1 damage and draw a card.

var Wrath633 = {

    cardFilters: {
        chooseOneA: {
            name: 'Wrath',
            description: 'Deal 3 damage.',
            isToken: true
        },
        chooseOneB: {
            name: 'Wrath',
            description: 'Deal 1 damage. Draw a card.',
            isToken: true
        }
    },

    chooseOne: [{
        filter: 'chooseOneA',
        target: 'target',
    }, {
        filter: 'chooseOneB',
        target: 'target'
    }],

    getDescription: function() {
        return this.formatDescription('Choose One - Deal 3 damage; or Deal 1 damage and draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Wrath633"');
    },

};



exports.Wrath633 = Wrath633;
