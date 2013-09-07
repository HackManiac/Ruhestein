/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Deadly Shot; Destroy a random enemy minion.

var DeadlyShot239 = {

    getDescription: function() {
        return this.formatDescription('Destroy a random enemy minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DeadlyShot239"');
    },

};



exports.DeadlyShot239 = DeadlyShot239;
