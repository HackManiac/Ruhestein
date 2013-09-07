/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var FacelessManipulator450 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Choose a minion and become a copy of it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FacelessManipulator450"');
    },

};



exports.FacelessManipulator450 = FacelessManipulator450;
