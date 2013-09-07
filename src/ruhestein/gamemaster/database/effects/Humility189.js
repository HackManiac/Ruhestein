/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Humility189 = {

    getDescription: function() {
        return this.formatDescription('Change a minion\'s Attack to 1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Humility189"');
    },

};



exports.Humility189 = Humility189;
