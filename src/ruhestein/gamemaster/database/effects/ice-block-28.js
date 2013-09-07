/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Ice Block; Secret: When your hero takes fatal damage, prevent it and become Immune this turn.

var IceBlock28 = {

    getDescription: function() {
        return this.formatDescription('Secret: When your hero takes fatal damage, prevent it and become Immune this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "IceBlock28"');
    },

};



exports.IceBlock28 = IceBlock28;
