/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 1/3 Hidden Gnome; Was hiding in a barrel!

var HiddenGnome387 = {

    getDescription: function() {
        return this.formatDescription('Was hiding in a barrel!');
    },

    cast: function() {
        throw new Error('No cast implementation for missions set card effect "HiddenGnome387"');
    }

};



exports.HiddenGnome387 = HiddenGnome387;
