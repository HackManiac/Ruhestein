/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AncientWatcher153 = {

    getDescription: function() {
        return this.formatDescription('Can\'t Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AncientWatcher153"');
    },

};



exports.AncientWatcher153 = AncientWatcher153;
