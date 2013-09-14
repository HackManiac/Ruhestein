/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 1/7 Mogu'shan Warden; Taunt

var MogushanWarden346 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        this.castTaunt();
    }

};



exports.MogushanWarden346 = MogushanWarden346;
