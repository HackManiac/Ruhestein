/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var FlametongueTotem390 = {

    getDescription: function() {
        return this.formatDescription('Adjacent minions have +2 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FlametongueTotem390"');
    },

};



exports.FlametongueTotem390 = FlametongueTotem390;
