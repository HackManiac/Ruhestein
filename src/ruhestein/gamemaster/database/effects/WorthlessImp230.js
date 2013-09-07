/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Worthless Imp; You are out of demons! At least there are always imps...

var WorthlessImp230 = {

    getDescription: function() {
        return this.formatDescription('You are out of demons! At least there are always imps...');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WorthlessImp230"');
    },

};



exports.WorthlessImp230 = WorthlessImp230;
