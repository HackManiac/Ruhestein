/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var CrazyMonkey393 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Throw Bananas.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "CrazyMonkey393"');
    },

};



exports.CrazyMonkey393 = CrazyMonkey393;
