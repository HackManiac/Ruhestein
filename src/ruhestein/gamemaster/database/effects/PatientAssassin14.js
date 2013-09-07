/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 1/1 Patient Assassin; Stealth. Destroy any minion damaged by this minion.

var PatientAssassin14 = {

    getDescription: function() {
        return this.formatDescription('Stealth. Destroy any minion damaged by this minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "PatientAssassin14"');
    },

};



exports.PatientAssassin14 = PatientAssassin14;
