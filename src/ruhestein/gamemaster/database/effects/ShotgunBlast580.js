/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ShotgunBlast580 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Deal 1 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ShotgunBlast580"');
    },

};



exports.ShotgunBlast580 = ShotgunBlast580;
