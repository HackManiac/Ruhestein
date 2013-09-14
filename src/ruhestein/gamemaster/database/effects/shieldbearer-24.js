/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 0/4 Shieldbearer; Taunt

var Shieldbearer24 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        this.castTaunt();
    }

};



exports.Shieldbearer24 = Shieldbearer24;
