/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Shotgun Blast; Hero Power  Deal 1 damage.

var ShotgunBlast580 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Deal 1 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for missions set card effect "ShotgunBlast580"');
    },

};



exports.ShotgunBlast580 = ShotgunBlast580;
