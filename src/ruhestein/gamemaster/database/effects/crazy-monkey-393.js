/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/2 Crazy Monkey; Battlecry: Throw Bananas.

var CrazyMonkey393 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Throw Bananas.');
    },

    cast: function() {
        throw new Error('No cast implementation for missions set card effect "CrazyMonkey393"');
    }

};



exports.CrazyMonkey393 = CrazyMonkey393;
