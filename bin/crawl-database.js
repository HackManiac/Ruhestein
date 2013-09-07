#!/usr/bin/env node

/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var fs = require('fs');
var path = require('path');

var crawler = require('crawler');
var _ = require('underscore');


var utils = require('../src/ruhestein/common/lib/utils');



var rawCardSetMap = {};



var reportError = function(message) {
    throw new Error(message);
};



var didComplete = function() {
    var rawCardSet = _.values(rawCardSetMap).sort(function (left, right) {
        if (left.name < right.name) {
            return -1;
        } else if (left.name > right.name) {
            return 1;
        } else if (left.id < right.id) {
            return -1;
        } else if (left.id > right.id) {
            return 1;
        } else {
            return 0;
        }
    });

    var rawCardIds = _.keys(rawCardSetMap).sort();

    var escape = function (input, quote) {
        var q = quote ? '\'' : '';
        return q + input.replace(/\\/g, '\\\\').replace(/'/g, '\\\'') + q;
    };

    var allEffects = {};

    var effectsDir = path.join(__dirname, '../src/ruhestein/gamemaster/database/effects');

    var effectTestsDir = path.join(__dirname, '../test/spec/ruhestein-test/gamesimulation/effects');

    _.forEach(rawCardIds, function(rawCardId) {
        var rawCard = rawCardSetMap [rawCardId];

        var id = rawCard.id;
        var name = rawCard.name;
        var desc = rawCard.description || '';

        var idNr = id.replace(/-.*$/, '');

        var nameId = name.split(/[\s]+/g).map(function(input) {
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }).join('').replace(/[^A-Za-z0-9]/g, '') + idNr;

        var filenameId = name.split(/[\s]+/g).map(function(input) {
            return input.toLowerCase();
        }).join('-').replace(/[^A-Za-z0-9-]/g, '') + '-' + idNr;

        if (desc != '') {
            if (allEffects [nameId] !== undefined) {
                reportError('Duplicate name ID "' + nameId + '"');
            }

            var summary = '(' + rawCard.cost + ') ';
            if ((rawCard.type === 'hero') || (rawCard.type === 'minion') || (rawCard.type === 'weapon')) {
                summary += rawCard.attack + '/' + rawCard.health + ' ';
            }
            summary += rawCard.name + '; ' + rawCard.description;

            allEffects [nameId] = {
                filenameId: filenameId,
                desc: desc,
                summary: summary,
                type: rawCard.type,
                name: rawCard.name
            };

            rawCard.effectId = nameId;
        }
    });

    var allEffectKeys = _.keys(allEffects).sort();

    var requireLines = [], requireTestLines = [];

    _.forEach(allEffectKeys, function(effectId) {
        var effectInfo = allEffects [effectId];

        var lines = [
            '/**',
            ' * @license',
            ' * Ruhestein - A Hearthstone game mechanics simulator',
            ' */',
            '\'use strict\';',
            '',
            '',
            '',
            '// From ' + effectInfo.type + ' card: ' + effectInfo.summary,
            '',
            'var ' + effectId + ' = {',
            '',
            '    getDescription: function() {',
            '        return this.formatDescription(' + escape(effectInfo.desc, true) + ');',
            '    },',
            '',
            '    cast: function() {',
            '        throw new Error(\'No cast implementation for effect "' + effectId + '"\');',
            '    },',
            '',
            '};',
            '',
            '',
            '',
            'exports.' + effectId + ' = ' + effectId + ';',
            ''
        ].join('\n');

        var testLines = [
            '/**',
            ' * @license',
            ' * Ruhestein - A Hearthstone game mechanics simulator',
            ' */',
            '\'use strict\';',
            '',
            '',
            '',
            'var Ruhestein = require(\'ruhestein\');',
            '',
            '',
            'var GameSimulationTestUtils = require(\'../gamesimulation-test-utils\');',
            '',
            '',
            '',
            '// From ' + effectInfo.type + ' card: ' + effectInfo.summary,
            '',
            'describe(' + escape(effectId, true) + ', function() {',
            '',
            '    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;',
            '',
            '    xit(\'should work correctly\', function() {',
            '        var g = setupDefaultGameTestEngine({',
            '            player2: {',
            '                deck: [',
            '                    ' + escape('1 ' + effectInfo.name, true),
            '                ],',
            '            }',
            '        });',
            '',
            '        g.play(g.hand(0, ' + escape(effectInfo.name, true) + '), 0, \'{}\');',
            '',
            '        // TODO',
            '    });',
            '',
            '});',
            ''
        ].join('\n');

        var filenameId = effectInfo.filenameId;

        requireLines.push('    require(\'./effects/' + filenameId + '\'),');
        requireTestLines.push('    require(\'./effects/' + filenameId + '-test\');');

        var filename = path.join(effectsDir, filenameId + '.js');

        if (!fs.existsSync(filename)) {
            fs.writeFileSync(filename, lines);
        }

        filename = path.join(effectTestsDir, filenameId + '-test.js');

        if (!fs.existsSync(filename)) {
            fs.writeFileSync(filename, testLines);
        }
    });

    var lines = [
        '/**',
        ' * @license',
        ' * Ruhestein - A Hearthstone game mechanics simulator',
        ' */',
        '\'use strict\';',
        '',
        '',
        '',
        '// auto-generated on ' + new Date(),
        '',
        '',
        '',
        'var cardDataSet = ' + JSON.stringify(rawCardSet, null, '    ') + ';',
        '',
        '',
        '',
        'var effects = [',
        requireLines.join('\n'),
        '];',
        '',
        '',
        '',
        'exports.cardDataSet = cardDataSet;',
        'exports.effects = effects;',
        '',
    ].join('\n');

    var testLines = [
        '/**',
        ' * @license',
        ' * Ruhestein - A Hearthstone game mechanics simulator',
        ' */',
        '\'use strict\';',
        '',
        '',
        '',
        '// auto-generated on ' + new Date(),
        '',
        '',
        '',
        'describe(\'Effects\', function() {',
        '',
        requireTestLines.join('\n'),
        '',
        '});',
        '',
    ].join('\n');

    var filename = path.join(effectsDir, '../raw-database.js');

    fs.writeFileSync(filename, lines);

    filename = path.join(effectTestsDir, '../effects-test.js');

    fs.writeFileSync(filename, testLines);

    console.log('Database crawl completed!');
};



var extractCardInfo = function($) {
    var rows = $('.listing tbody tr');

    for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        var elRow = rows[rowIndex];

        var $imageCell = $('.visual-image-cell', elRow);
        var $detailsCell = $('.visual-details-cell', elRow);
        var $nameCol = $('.col-name', elRow);
        var $costCol = $('.col-cost', elRow);
        var $attackCol = $('.col-attack', elRow);
        var $healthCol = $('.col-health', elRow);

        var rawCardData = null, $cardLink;
        if ($imageCell.length && $detailsCell.length) {
            var $cardImage = $('img', $imageCell[0]);
            var $cardTitle = $('h3', $detailsCell[0]);
            $cardLink = $('a', $cardTitle[0]);
            var $cardDescription = $('h3+p', $detailsCell[0]);
            var $cardPropList = $('ul', $detailsCell[0]);
            var $cardProps = $('li', $cardPropList[0]);

            rawCardData = {};

            rawCardData.id = $cardLink.attr('href').replace(/^\/cards\//, '');
            rawCardData.hearthpwnId = rawCardData.id.replace(/-.*$/, '');
            rawCardData.imageLink = $cardImage.attr('src');
            rawCardData.name = $cardLink.text();

            rawCardData.description = $cardDescription.text();

            for (var propIndex = 0; propIndex < $cardProps.length; propIndex++) {
                var elProp = $cardProps[propIndex];

                var prop = $(elProp).text(), md;
                if ((md = prop.match(/^Type: (.*)$/))) {
                    rawCardData.type = utils.variablify(md[1]);
                } else if ((md = prop.match(/^Class:[\s]+(.*)$/))) {
                    rawCardData.class = utils.variablify(md[1]);
                } else if ((md = prop.match(/^Set:[\s]+(.*)$/))) {
                    rawCardData.set = utils.variablify(md[1]);
                } else if ((md = prop.match(/^Faction:[\s]+(.*)$/))) {
                    rawCardData.faction = utils.variablify(md[1]);
                } else if ((md = prop.match(/^Rarity:[\s]+(.*)$/))) {
                    rawCardData.rarity = utils.variablify(md[1]);
                } else if ((md = prop.match(/^Race:[\s]+(.*)$/))) {
                    rawCardData.race = utils.variablify(md[1]);
                } else if ((md = prop.match(/^Artist:[\s]+(.*)$/))) {
                    // ignore
                } else if (prop === 'Token') {
                    rawCardData.isToken = true;
                } else if (prop === 'Collectible') {
                    rawCardData.isCollectible = true;
                } else if (prop === 'Elite') {
                    rawCardData.isElite = true;
                } else {
                    throw new Error('Unknown prop "' + prop + '".');
                }
            }
        } else if ($nameCol && $costCol && $attackCol && $healthCol) {
            $cardLink = $('a', $nameCol);

            rawCardData = {};

            rawCardData.id = $cardLink.attr('href').replace(/^\/cards\//, '');
            rawCardData.cost = +$costCol.text().trim();
            rawCardData.attack = +$attackCol.text().trim();
            rawCardData.health = +$healthCol.text().trim();
        }

        if (rawCardData) {
            var id = rawCardData.id;
            if (rawCardSetMap [id] === undefined) {
                rawCardSetMap [id] = {
                    id: null,
                    cost: 0,
                    attack: 0,
                    health: 0,
                    imageLink: null,
                    name: null,
                    description: null,
                    type: null,
                    'class': null,
                    set: null,
                    faction: null,
                    rarity: null,
                    race: null,
                    isToken: false,
                    isCollectible: false,
                    isElite: false,
                    effectId: null
                };
            }
            for (var key in rawCardData) {
                if (rawCardData.hasOwnProperty(key)) {
                    rawCardSetMap [id][key] = rawCardData [key];
                }
            }
        }
    }
};



var Crawler = crawler.Crawler;

var c = new Crawler({
    maxConnections: 10,
    onDrain: function() {
        didComplete();
    }
});



var queuePage = function(pageNr, display) {
    var url = 'http://www.hearthpwn.com/cards?page=' + pageNr + '&display=' + display;

    c.queue({
        uri: url,
        callback: function(error, result, $) {
            if (error) {
                reportError('Failed to load page "' + url + '"');
            } else {
                extractCardInfo($);
            }
        }
    });
};



var main = function() {
    for (var pageNr = 1; pageNr <= 6; pageNr++) {
        queuePage(pageNr, 1);
        queuePage(pageNr, 2);
    }
}



main();
