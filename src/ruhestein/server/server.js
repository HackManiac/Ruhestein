/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var connect = require('connect');
var http = require('http');
var io = require('socket.io');


var Connection = require('./connection');



var activeConnections = [];



var start = function() {
    var server = connect()
        .use(connect.logger('dev'))
        .use(connect.static('.tmp'))
        .use(connect.static('app'));

    var httpServer = http.createServer(server);
    io = io.listen(httpServer, { log: false });
    httpServer.listen(3000);

    io.sockets.on('connection', function(socket) {
        var connection = new Connection(socket);
        activeConnections.push(connection);
    });
};



exports.start = start;
