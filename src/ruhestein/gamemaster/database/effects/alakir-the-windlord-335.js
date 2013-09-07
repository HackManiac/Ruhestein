/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (8) 3/5 Al'Akir the Windlord; Windfury, Charge, Divine Shield, Taunt

var AlAkirTheWindlord335 = {

    getDescription: function() {
        return this.formatDescription('Windfury, Charge, Divine Shield, Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AlAkirTheWindlord335"');
    },

};



exports.AlAkirTheWindlord335 = AlAkirTheWindlord335;
