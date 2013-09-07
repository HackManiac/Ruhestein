/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Inner Fire; Change a minion's Attack to be equal to its Health.

var InnerFire207 = {

    getDescription: function() {
        return this.formatDescription('Change a minion\'s Attack to be equal to its Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "InnerFire207"');
    },

};



exports.InnerFire207 = InnerFire207;
