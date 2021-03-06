/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 2/4 Keeper of the Grove; Choose One - Deal 2 damage; or Silence a minion.

var KeeperOfTheGrove459 = {

    cardFilters: {
        chooseOneA: {
            name: 'Moonfire',
            isToken: true
        },
        chooseOneB: {
            name: 'Dispel',
            isToken: true,
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
        return this.formatDescription('Choose One - Deal 2 damage; or Silence a minion.');
    },

    cast: function() {
        // nop
    }

};



exports.KeeperOfTheGrove459 = KeeperOfTheGrove459;
