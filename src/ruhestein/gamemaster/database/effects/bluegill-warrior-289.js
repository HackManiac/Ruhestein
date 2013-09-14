/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/1 Bluegill Warrior; Charge

var BluegillWarrior289 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        this.castCharge();
    }

};



exports.BluegillWarrior289 = BluegillWarrior289;
