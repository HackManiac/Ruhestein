/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var YseraAwakens235 = {

    getDescription: function() {
        return this.formatDescription('Deal 5 damage to all characters except Ysera.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "YseraAwakens235"');
    },

};



exports.YseraAwakens235 = YseraAwakens235;
