/**
 * Created by Ianzou on 2015/12/25.
 */
var fs = require('fs');
var path = require('path');
exports = module.exports = getConfig;
function getConfig(fileName) {
    var cache = {};
    if (!cache[fileName]) {
        if (!process.env.cloudDriveConfig) {
            process.env.cloudDriveConfig = path.join(process.cwd(), fileName);
        }
        if (fs.existsSync(process.env.cloudDriveConfig)) {
            var contents = fs.readFileSync(
                process.env.cloudDriveConfig, {encoding: 'utf-8'});
            cache[fileName] = JSON.parse(contents);
        }
    }
    return cache[fileName];
};