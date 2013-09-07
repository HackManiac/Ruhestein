/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 4/4 Ogre Magi; Spell Power +1

var OgreMagi659 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +1');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "OgreMagi659"');
    },

};



exports.OgreMagi659 = OgreMagi659;
