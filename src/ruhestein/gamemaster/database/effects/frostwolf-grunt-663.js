/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/2 Frostwolf Grunt; Taunt

var FrostwolfGrunt663 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        this.castTaunt();
    },

};



exports.FrostwolfGrunt663 = FrostwolfGrunt663;
