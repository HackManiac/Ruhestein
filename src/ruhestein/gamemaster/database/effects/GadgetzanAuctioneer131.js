/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/4 Gadgetzan Auctioneer; Whenever you cast a spell, draw a card.

var GadgetzanAuctioneer131 = {

    getDescription: function() {
        return this.formatDescription('Whenever you cast a spell, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "GadgetzanAuctioneer131"');
    },

};



exports.GadgetzanAuctioneer131 = GadgetzanAuctioneer131;
