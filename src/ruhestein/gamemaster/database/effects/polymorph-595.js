/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Polymorph; Transform a minion into a 1/1 Sheep.

var Polymorph595 = {

    getDescription: function() {
        return this.formatDescription('Transform a minion into a 1/1 Sheep.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Polymorph595"');
    },

};



exports.Polymorph595 = Polymorph595;
