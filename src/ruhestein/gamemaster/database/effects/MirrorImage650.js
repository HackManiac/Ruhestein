/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (0) 0/1 Mirror Image; Taunt

var MirrorImage650 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MirrorImage650"');
    },

};



exports.MirrorImage650 = MirrorImage650;
