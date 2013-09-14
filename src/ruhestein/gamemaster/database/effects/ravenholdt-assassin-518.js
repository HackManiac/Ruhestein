/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (7) 7/5 Ravenholdt Assassin; Stealth

var RavenholdtAssassin518 = {

    getDescription: function() {
        return this.formatDescription('Stealth');
    },

    cast: function() {
        this.castStealth();
    }

};



exports.RavenholdtAssassin518 = RavenholdtAssassin518;
