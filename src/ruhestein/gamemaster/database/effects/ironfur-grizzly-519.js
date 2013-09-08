/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/3 Ironfur Grizzly; Taunt

var IronfurGrizzly519 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        this.castTaunt();
    },

};



exports.IronfurGrizzly519 = IronfurGrizzly519;
