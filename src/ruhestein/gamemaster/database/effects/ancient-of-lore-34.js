/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (7) 5/5 Ancient of Lore; Choose One - Draw 2 cards; or Restore 8 Health.

var AncientOfLore34 = {

    cardFilters: {
        chooseOneA: {
            name: 'Ancient Teachings',
            isToken: true
        },
        chooseOneB: {
            name: 'Ancient Secrets',
            isToken: true
        }
    },

    chooseOne: [{
        filter: 'chooseOneA',
        target: 'none',
    }, {
        filter: 'chooseOneB',
        target: 'target'
    }],

    getDescription: function() {
        return this.formatDescription('Choose One - Draw 2 cards; or Restore 8 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AncientOfLore34"');
    },

};



exports.AncientOfLore34 = AncientOfLore34;
