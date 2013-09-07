/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Player model', function() {

    var Player = Ruhestein.gameMaster.Player;

    it('should be a function', function() {
        expect(Player).to.be.a('function');
    });

    it('supports Account / Player duck-typing', function() {
        expect(Player.prototype.getAccountName).to.be.a('function');
    });

});
