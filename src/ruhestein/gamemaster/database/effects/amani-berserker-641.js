/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/3 Amani Berserker; Enrage: +3 Attack

var AmaniBerserker641 = {

    getDescription: function() {
        return this.formatDescription('Enrage: +3 Attack');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AmaniBerserker641"');
    },

};



exports.AmaniBerserker641 = AmaniBerserker641;
