/**
 * Created by dar on 2/23/2016.
 */
var log = require('./logger');
var config = new require('./configuration')('./config.json');
var nodes = config.logWriters;
for(var i=0;i<nodes.length;i++){
    var logger = new log(nodes[i]);
    logger.subscribe();
}
