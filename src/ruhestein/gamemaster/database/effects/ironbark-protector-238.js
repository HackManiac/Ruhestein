/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (8) 8/8 Ironbark Protector; Taunt

var IronbarkProtector238 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        this.castTaunt();
    }

};



exports.IronbarkProtector238 = IronbarkProtector238;
