/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 2/4 Keeper of the Grove; Choose One - Deal 2 damage; or Silence a minion.

var KeeperOfTheGrove459 = {

    getDescription: function() {
        return this.formatDescription('Choose One - Deal 2 damage; or Silence a minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "KeeperOfTheGrove459"');
    },

};



exports.KeeperOfTheGrove459 = KeeperOfTheGrove459;
