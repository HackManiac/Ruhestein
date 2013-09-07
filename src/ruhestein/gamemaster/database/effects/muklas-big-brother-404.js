/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 10/10 Mukla's Big Brother; So strong! And only 6 Mana?!

var MuklasBigBrother404 = {

    getDescription: function() {
        return this.formatDescription('So strong! And only 6 Mana?!');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MuklasBigBrother404"');
    },

};



exports.MuklasBigBrother404 = MuklasBigBrother404;
