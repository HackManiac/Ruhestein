/**
 * @license
 * Ruhestein - A Hearthstone game mechanic simulator
 */
'use strict';



var path = require('path');


var _ = require('underscore');



var UmdWrapper = {

    wrapSingleFile: function(content, filepath, pattern) {
        var name = pattern.exec(filepath) [1];

        var data = content.replace(/require\('([^']+)'/g, function(match, filepath) {
            if (/^\.\.?\//.test(filepath)) {
                filepath = path.resolve('/', path.dirname(name), filepath).substring(1);
            }
            return 'loader(\'' + filepath + '\'';
        });

        var result = [
            'loader.register(\'' + name + '\', function(require, exports, module) {',
            data,
            '});',
            '',
        ].join('\n');

        return result;
    },

    getBanner: function() {
        var result = [
            '(function() {',
            '',
            'var loader = (function() {',
            '    var modules = {};',
            '    var cache = {};',
            '',
            '    var dummy = function() {',
            '        return function() {};',
            '    };',
            '    var initModule = function(name, definition) {',
            '        var module = {',
            '            id: name,',
            '            exports: {}',
            '        };',
            '        definition(dummy(), module.exports, module);',
            '        var exports = cache[name] = module.exports;',
            '        return exports;',
            '    };',
            '',
            '    var loader = function(path) {',
            // '        console.log(path);',
            '        if (cache.hasOwnProperty(path)) return cache[path];',
            '        if (modules.hasOwnProperty(path)) return initModule(path, modules[path]);',
            '        throw new Error(\'Cannot find module "\' + path + \'"\');',
            '    };',
            '',
            '    loader.register = function(bundle, fn) {',
            '        modules[bundle] = fn;',
            '    };',
            '',
            '    return loader;',
            '})();',
            '',
            '',
            '',
        ].join('\n');

        return result;
    },

    getFooter: function(main, globalExport, externalDeps) {
        externalDeps = _.defaults(externalDeps, {
            chaplin: 'Chaplin',
            backbone: 'Backbone',
            underscore: '_'
        });

        var edKeys = _.keys(externalDeps);
        var edValues = _.map(edKeys, function(key) { return externalDeps [key]; });

        var edVarList = edValues.join(', ');
        var edDefineDepsList = _.map(edKeys, function(edKey) { return '\'' + edKey + '\''; }).join(', ');
        var edRequireList = _.map(edKeys, function(edKey) { return 'require(\'' + edKey + '\')'; }).join(', ');
        var edGlobalsList = _.map(edKeys, function(edKey) { return 'window.' + edKey; }).join(', ');

        var result = _.flatten([
            '',
            '',
            '',
            'var regDeps = function(' + edVarList + ') {',
            _.map(edKeys, function(edKey) {
                return [
                    '    loader.register(\'' + edKey + '\', function(r, e, module) {',
                    '        module.exports = ' + externalDeps [edKey] + ';',
                    '    });'
                ];
            }),
            '};',
            '',
            'if (typeof define === \'function\' && define.amd) {',
            '    define([' + edDefineDepsList + '], function(' + edVarList + ') {',
            '        regDeps(' + edValues.join(', ') + ');',
            '        return loader(\'' + main + '\');',
            '    });',
            '} else if (typeof module === \'object\' && module && module.exports) {',
            '    regDeps(' + edRequireList + ');',
            '    module.exports = loader(\'' + main + '\');',
            '} else if (typeof require === \'function\') {',
            '    regDeps(' + edGlobalsList + ');',
            '    window.' + globalExport + ' = loader(\'' + main + '\');',
            '} else {',
            '    throw new Error(\'Requires Common.js or AMD modules\');',
            '}',
            '})();',
        ]).join('\n');

        return result;
    }

};



module.exports = UmdWrapper;
