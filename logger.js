/**
 * Created by Ianzou on 2016/2/23.
 */
function logger(configuration) {
    var config = configuration;
    var redisMatrix = require('./redisMatrix');
    var redisClient = redisMatrix.openClient('');
    var redisChannel = config['redisChannel'];

    logger.prototype.subscribe = function () {
        var fs = require('fs');
        var writer = fs.createWriteStream(config['filePath'], ['w']);
        //writer.setEncoding('utf8');
        redisClient.on('subscribe', function (channel, count) {
            }
        );
        redisClient.on('message', function (channel, message) {
                writer.write(message);
            }
        );
        redisClient.subscribe(redisChannel);
    };

    logger.prototype.getWriter = function () {
        var logRedis = require('./logRedis');
        var writer = new logRedis('INFO', redisClient, redisChannel);
        return writer
    }
}

module.exports = logger;
