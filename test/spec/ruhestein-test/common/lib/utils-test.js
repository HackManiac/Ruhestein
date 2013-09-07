/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Utils', function() {

    var utils = Ruhestein.utils;

    it('should be an object', function() {
        expect(utils).to.be.an('object');
    });

    describe('cap', function() {

        it('should be a function', function() {
            expect(utils.cap).to.be.a('function');
        });

        it('should cap to min correctly', function() {
            var result = utils.cap(-1, 0, 100);

            expect(result).to.equal(0);
        });

        it('should cap to max correctly', function() {
            var result = utils.cap(101, 0, 100);

            expect(result).to.equal(100);
        });

        it('should not cap between min and max', function() {
            var result = utils.cap(55, 0, 100);

            expect(result).to.equal(55);
        });

    });

    describe('variablify', function() {

        it('should be a function', function() {
            expect(utils.variablify).to.be.a('function');
        });

        it('should variablify a string correctly', function() {
            var result = utils.variablify('Game Master');

            expect(result).to.equal('gameMaster');
        });

    });

});
