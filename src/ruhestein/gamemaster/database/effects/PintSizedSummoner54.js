/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var PintSizedSummoner54 = {

    getDescription: function() {
        return this.formatDescription('The first minion you play each turn costs (2) less.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "PintSizedSummoner54"');
    },

};



exports.PintSizedSummoner54 = PintSizedSummoner54;
