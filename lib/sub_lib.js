/**
 * Created by Administrator on 2018/5/15.
 */
'use strict';
var pageName = 'lib';


exports.getAccessToken = require ('./sub_lib/access_token/get_access_token');

exports.aesMsg = require ('./sub_lib/crypto/aesMsg');

var sha  = require ('./sub_lib/crypto/sha');
exports.sha =sha;