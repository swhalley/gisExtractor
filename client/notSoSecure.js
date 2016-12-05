/**
 * This code came from 
 * http://lollyrock.com/articles/nodejs-encryption/
 * 
 * password is hardcoded in here for a good laugh. This isn't intended to be secure. 
 */

var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var password = 'pcloadletter';

exports.encrypt = function(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
};
 
exports.decrypt = function(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
};