/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Young Dragonhawk; Windfury

var YoungDragonhawk629 = {

    getDescription: function() {
        return this.formatDescription('Windfury');
    },

    cast: function() {
        this.castWindfury();
    }

};



exports.YoungDragonhawk629 = YoungDragonhawk629;
