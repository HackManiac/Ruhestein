/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Mark of Nature; Choose One - Give a minion +4 Attack; or +4 Health and Taunt.

var MarkOfNature149 = {

    cardFilters: {
        chooseOneA: {
            name: 'Mark of Nature',
            description: '+4 Attack.',
            isToken: true
        },
        chooseOneB: {
            name: 'Mark of Nature',
            description: '+4 Health and Taunt.',
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
        return this.formatDescription('Choose One - Give a minion +4 Attack; or +4 Health and Taunt.');
    },

    cast: function() {
        // nop
    },

};



exports.MarkOfNature149 = MarkOfNature149;
