/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Kidnapper562 = {

    getDescription: function() {
        return this.formatDescription('Combo: Return a minion to its owner\'s hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Kidnapper562"');
    },

};



exports.Kidnapper562 = Kidnapper562;
