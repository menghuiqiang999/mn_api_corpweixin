/**
 * Created by Administrator on 2018/5/12.
 * http://work.weixin.qq.com/api/doc#12976  按企业微信的要求加密msg
 *
 */
'use strict';
var pageName = 'cryptoMsg ';

var getRandChar = require ('../common/get_rand_char');
var cryptoMsg = function (msg,corpId){
    var randChar =  getRandChar(16);
    var len = msg.length;
    var b=Buffer.from (len , 0 , 4);
    var randMsg = randChar + b + msg +corpId;
    console.log(pageName + ':randMsg:' + randMsg );
    //todo

};
module.exports = cryptoMsg;