/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) NOOOOOOOOOOOO; Somehow, the card you USED to have has been deleted.  Here, have this one instead!

var NOOOOOOOOOOOO687 = {

    getDescription: function() {
        return this.formatDescription('Somehow, the card you USED to have has been deleted.  Here, have this one instead!');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "NOOOOOOOOOOOO687"');
    },

};



exports.NOOOOOOOOOOOO687 = NOOOOOOOOOOOO687;
