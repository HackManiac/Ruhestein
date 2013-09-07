/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var TaurenWarrior477 = {

    getDescription: function() {
        return this.formatDescription('Taunt. Enrage: +3 Attack');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TaurenWarrior477"');
    },

};



exports.TaurenWarrior477 = TaurenWarrior477;
