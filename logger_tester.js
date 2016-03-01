/**
 * Created by Ianzou on 2016/3/1.
 */


var should = require('should');

describe('logger', function () {
    this.timeout(10000);
    it('should get logInfo', function (done) {
        var logMsg = 'test';
        var log = require('./logger');
        var config = new require('./configuration')('./config.json');
        var nodes = config.logWriters;
        for (var i = 0; i < nodes.length; i++) {
            var logger = new log(nodes[i]);
            logger.subscribe();
        }
        var log = require('./logger');
        var logger = new log(config.token.log).getWriter();

        logger.info(logMsg);

        var fs = require('fs');
        setInterval()

        var client = net.createConnection({port: config.token.port, host: config.token.host});
        client.on('connect', function () {
            console.log('connected');
            var msg = {
                userName: 'ian',
                action: 'login',
                content: {
                    userName: 'ian',
                    password: '0724'
                }
            };
            client.write(JSON.stringify(msg));
        });
        client.on('error', function (error) {
            console.log(error);
        });
        client.on('data', function (data) {
            var msg = JSON.parse(data);
            //msg.result.OK.should.eql('1') && !msg.result.token.should.eql('');
            done();
        });
        client.on('end', client.emit.bind(client, 'error'));
    })
})