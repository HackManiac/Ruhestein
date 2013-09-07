/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 4/5 Ancient Watcher; Can't Attack.

var AncientWatcher153 = {

    getDescription: function() {
        return this.formatDescription('Can\'t Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AncientWatcher153"');
    },

};



exports.AncientWatcher153 = AncientWatcher153;
