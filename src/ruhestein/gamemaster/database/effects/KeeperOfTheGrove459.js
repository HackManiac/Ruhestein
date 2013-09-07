/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var KeeperOfTheGrove459 = {

    getDescription: function() {
        return this.formatDescription('Choose One - Deal 2 damage; or Silence a minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "KeeperOfTheGrove459"');
    },

};



exports.KeeperOfTheGrove459 = KeeperOfTheGrove459;
