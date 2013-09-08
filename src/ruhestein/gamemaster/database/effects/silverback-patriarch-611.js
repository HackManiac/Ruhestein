/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 1/4 Silverback Patriarch; Taunt

var SilverbackPatriarch611 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        this.castTaunt();
    },

};



exports.SilverbackPatriarch611 = SilverbackPatriarch611;
