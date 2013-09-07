/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Power Overwhelming; Give a friendly minion +4/+4 until end of turn. Then, it dies. Horribly.

var PowerOverwhelming170 = {

    getDescription: function() {
        return this.formatDescription('Give a friendly minion +4/+4 until end of turn. Then, it dies. Horribly.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "PowerOverwhelming170"');
    },

};



exports.PowerOverwhelming170 = PowerOverwhelming170;
