/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AncientTeachings517 = {

    getDescription: function() {
        return this.formatDescription('Draw 2 cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AncientTeachings517"');
    },

};



exports.AncientTeachings517 = AncientTeachings517;
