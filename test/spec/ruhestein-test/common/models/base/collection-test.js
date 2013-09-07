/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Base collection', function() {

    var Collection = Ruhestein.common.Collection;

    it('should be a function', function() {
        expect(Collection).to.be.a('function');
    });

});
