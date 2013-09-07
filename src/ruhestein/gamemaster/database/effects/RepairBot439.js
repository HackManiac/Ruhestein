/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 0/5 Repair Bot; At the end of your turn, restore 3 Health to all characters.

var RepairBot439 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, restore 3 Health to all characters.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "RepairBot439"');
    },

};



exports.RepairBot439 = RepairBot439;
