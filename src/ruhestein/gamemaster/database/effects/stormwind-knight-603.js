/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 2/5 Stormwind Knight; Charge

var StormwindKnight603 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        this.castCharge();
    },

};



exports.StormwindKnight603 = StormwindKnight603;
