/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Account model', function() {

    var Account = Ruhestein.gameMaster.Account;

    it('should be a function', function() {
        expect(Account).to.be.a('function');
    });

    it('supports Account / Player duck-typing', function() {
        expect(Account.prototype.getAccountName).to.be.a('function');
    });

});
