/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (8) 5/8 Cenarius; Choose One - Give your other minions +2/+2; or Summon two 2/2 Treants with Taunt.

var Cenarius605 = {

    cardFilters: {
        chooseOneA: {
            name: 'Demigod\'s Favor',
            isToken: true
        },
        chooseOneB: {
            name: 'Shan\'do\'s Lesson',
            isToken: true
        }
    },

    chooseOne: [{
        filter: 'chooseOneA',
        target: 'none'
    }, {
        filter: 'chooseOneB',
        target: 'none'
    }],

    getDescription: function() {
        return this.formatDescription('Choose One - Give your other minions +2/+2; or Summon two 2/2 Treants with Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Cenarius605"');
    },

};



exports.Cenarius605 = Cenarius605;
