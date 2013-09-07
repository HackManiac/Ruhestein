/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 5/5 Sylvanas Windrunner; Deathrattle: Take control of a random enemy minion.

var SylvanasWindrunner33 = {

    getDescription: function() {
        return this.formatDescription('Deathrattle: Take control of a random enemy minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SylvanasWindrunner33"');
    },

};



exports.SylvanasWindrunner33 = SylvanasWindrunner33;
