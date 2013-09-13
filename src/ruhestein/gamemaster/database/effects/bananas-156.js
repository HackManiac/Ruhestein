/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Bananas; Give a friendly minion +1/+1. (+1 Attack/+1 Health)

var Bananas156 = {

    getDescription: function() {
        return this.formatDescription('Give a friendly minion +1/+1. (+1 Attack/+1 Health)');
    },

    cast: function() {
        throw new Error('No cast implementation for missions set card effect "Bananas156"');
    }

};



exports.Bananas156 = Bananas156;
