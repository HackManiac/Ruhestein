/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MuklasBigBrother404 = {

    getDescription: function() {
        return this.formatDescription('So strong! And only 6 Mana?!');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MuklasBigBrother404"');
    },

};



exports.MuklasBigBrother404 = MuklasBigBrother404;
