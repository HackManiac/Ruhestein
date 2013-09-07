/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var HeroicStrike1 = {

    getDescription: function() {
        return this.formatDescription('Give your hero +4 Attack this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HeroicStrike1"');
    },

};



exports.HeroicStrike1 = HeroicStrike1;
