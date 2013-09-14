/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Power of the Wild; Choose One - Give your minions +1/+1; or Summon a 3/2 Panther.

var PowerOfTheWild165 = {

    cardFilters: {
        chooseOneA: {
            name: 'Leader of the Pack',
            isToken: true
        },
        chooseOneB: {
            name: 'Summon a Panther',
            isToken: true
        }
    },

    chooseOne: [{
        filter: 'chooseOneA',
        target: 'none',
    }, {
        filter: 'chooseOneB',
        target: 'none'
    }],

    getDescription: function() {
        return this.formatDescription('Choose One - Give your minions +1/+1; or Summon a 3/2 Panther.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "PowerOfTheWild165"');
    },

};



exports.PowerOfTheWild165 = PowerOfTheWild165;
