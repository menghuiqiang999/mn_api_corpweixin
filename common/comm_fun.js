/**
 * Created by Administrator on 2018/5/14.
 */
'use strict';
var pageName = 'com';

var commFun = function () {};
module.exports = commFun;

/**
 *
 * @param token
 * @param timestamp
 * @param nonce
 * @param encrypted
 * @returns shaSign
 * @example
 * var msgSignature = shaSignature(token,timestamp,nonce,encrypted);
 */
const com = require ('moonlight_function_common');
const crypto=com.crypto;

commFun.shaSignature = function (token,timestamp,nonce,encrypted) {
    const sha1=crypto.sha.sha1;
    var arrayStr=[token,timestamp,nonce,encrypted];
    var content=arrayStr.sort().join('');
    var shaSign = sha1(content);
    console.log (pageName + ':shaSignature:' + shaSign);
    return shaSign;
};

commFun.decryptoMsg = function (ecrypted,corpId,encodingAesKey,callback){
    const aes =crypto.aes;

    // Decode base64 encodingAesKey
    var sEncodingAesKey = encodingAesKey + '=';
    var bAesKey=Buffer.from (sEncodingAesKey,'base64');
    console.log( pageName + ':bAesKey: ' + bAesKey + ':lenght:' + bAesKey.length);
    // Fetch front 16 byte to iv
    var bIv = bAesKey.slice(0,16);
    console.log (pageName + ':bIv: ' + bIv + ':length:' + bIv.length);

    // aes decrypto base64 output randMsg encoding: uft8
    var randMsg = aes.decrypto(ecrypted,bAesKey,bIv);

    // Caculate the len of msg
    var lenCorpId = corpId.length;
    var bRandMsg = Buffer.from(randMsg);
    console.log(bRandMsg);
    var lenBRandMsg= bRandMsg.length;    // len of total bRandMsg;

    if (lenBRandMsg > (lenCorpId + 20) ) {
        var bMsg = bRandMsg.slice(20,(lenBRandMsg-lenCorpId));
        var msg = bMsg.toString();
    }
    else{
        callback ('ecrypted is a wrong input! ',null);
    };

    console.log (pageName + ':msg:' + JSON.stringify(msg));
    callback (null,msg);

};