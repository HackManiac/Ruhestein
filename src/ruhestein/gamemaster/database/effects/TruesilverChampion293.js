/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From weapon card: (4) 4/2 Truesilver Champion; Whenever your hero attacks, restore 2 Health to it.

var TruesilverChampion293 = {

    getDescription: function() {
        return this.formatDescription('Whenever your hero attacks, restore 2 Health to it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TruesilverChampion293"');
    },

};



exports.TruesilverChampion293 = TruesilverChampion293;
