/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/4 Druid of the Claw; Choose One - Charge; or +2 Health and Taunt.

var DruidOfTheClaw587 = {

    cardFilters: {
        chooseOneA: {
            name: 'Cat Form',
            isToken: true
        },
        chooseOneB: {
            name: 'Bear Form',
            isToken: true
        }
    },

    chooseOne: [{
        filter: 'chooseOneA',
        target: 'self'
    }, {
        filter: 'chooseOneB',
        target: 'self'
    }],

    getDescription: function() {
        return this.formatDescription('Choose One - Charge; or +2 Health and Taunt.');
    },

    cast: function() {
        // nop
    }

};



exports.DruidOfTheClaw587 = DruidOfTheClaw587;
