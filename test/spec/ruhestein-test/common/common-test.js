/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Common', function() {

    it('should be an object', function() {
        expect(Ruhestein.common).to.be.an('object');
    });

    require('./lib/utils-test');

    require('./models/base/model-test');
    require('./models/base/collection-test');
    
});
