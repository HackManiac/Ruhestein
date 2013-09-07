/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Savagery; Deal damage equal to your hero's Attack to all enemy minions.

var Savagery148 = {

    getDescription: function() {
        return this.formatDescription('Deal damage equal to your hero\'s Attack to all enemy minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Savagery148"');
    },

};



exports.Savagery148 = Savagery148;
