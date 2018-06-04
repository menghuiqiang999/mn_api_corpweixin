/**
 * Created by Administrator on 2018/5/23.
 *   对应企业微信 消息推送 中的 接受消息与事件
 *
 *
 */


'use strict';
var pageName = 'receive_msg_event';
var com= require ('mn_fun_comm');
var lib = require ('../sub_lib');
var receiveMsgEvent = function (){};

module.exports  = receiveMsgEvent ;

//----------------------------------------------------------------------------------------------------------------------


/**
 * Checked
 * 对应于概述中的验证URL
 * 1,接受来自req的信息，经过加密验证后，确认signature 是一致的。
 * 2,返回企业微信需要返回的msg
 * @param corpInfo   {json} - 企业微信中的企业信息，需要有corpId, token ,encodingAesKey
 * @param req
 * @param sReply
 */
receiveMsgEvent.verifyUrl = function(corpInfo,req,sReply){
    var echostr = req.query.echostr;
    verify(corpInfo,req,echostr,sReply);
} ;

//------------------------------------------------------------------------------

receiveMsgEvent.verifyUrlPkcs7 = function(corpInfo,req,sReply){
    var echostr = req.query.echostr;
    verifyPkcs7(corpInfo,req,echostr,sReply);
} ;

//---------------------------------------------------------------------------------------------------------------------


var xml2json = com.xml.xml2json;

receiveMsgEvent.receiveMsg= function(corpInfo,req ,callback){

    var corpId = corpInfo.corpId;
    var token = corpInfo.token;
    var encodingAesKey = corpInfo.encodingAesKey;

    var signature = req.query.msg_signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;

    receivePostData(req,function(err,postData){
        if (err) {
            return callback(err);
        };
        //postData 是xml格式
        xml2json(postData,function(err,xmlJson){
            if (err) {
                return callback(err);
            };
            var  encrypted = xmlJson.xml.Encrypt[0];
            //返回从企业微信接受的经过解密的消息体xml格式
            verifyPaddingFalse(corpInfo,req,encrypted,callback);
        });
    });
};
//------------------------------------------------------------------------------
receiveMsgEvent.receiveMsgPkcs7= function(corpInfo,req ,callback){

    var corpId = corpInfo.corpId;
    var token = corpInfo.token;
    var encodingAesKey = corpInfo.encodingAesKey;

    var signature = req.query.msg_signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;

    receivePostData(req,function(err,postData){
        if (err) {
            return callback(err);
        };
        //postData 是xml格式
        xml2json(postData,function(err,xmlJson){
            if (err) {
                return callback(err);
            };
            var  encrypted = xmlJson.xml.Encrypt[0];
            //返回从企业微信接受的经过解密的消息体xml格式
            verifyPkcs7(corpInfo,req,encrypted,callback);
        });
    });
};

//------------------------------------------------------------------------------

function receivePostData (req,callback) {
    var data = '';
    req.on('data', function (chunk) {
        data += chunk;
    });
    req.on('end', function () {
        callback(null,data);
    });
};

function verify(corpInfo,req,encryptoed,sReply){
    var msgSignature =req.query.msg_signature;
    var timestamp =req.query.timestamp;
    var nonce= req.query.nonce;

    var token = corpInfo.token;

    var signature = lib.sha.signature(token,timestamp,nonce,encryptoed);
    //console.log (pageName, '----signature-----' ,signature);
    if (msgSignature == signature ) {
        lib.aesMsg.decryptoMessage(corpInfo,encryptoed, function(err,msg){
            if (err) {
                return sReply(err);
            };
            sReply(null,msg);
        } );
    }
    else {
        sReply( pageName + ':不是来自企业微信的请求！') ;

    };
};

function verifyPaddingFalse(corpInfo,req,encryptoed,sReply){
    var msgSignature =req.query.msg_signature;
    var timestamp =req.query.timestamp;
    var nonce= req.query.nonce;

    var token = corpInfo.token;

    var signature = lib.sha.signature(token,timestamp,nonce,encryptoed);

    if (msgSignature == signature ) {
        lib.aesMsg.decryptoMsgPaddingFalse(corpInfo,encryptoed, function(err,msg){
            if (err) {
                return sReply(err);
            };
            sReply(null,msg);
        } );
    }
    else {
        sReply( pageName ,':不是来自企业微信的请求！') ;

    };
};

function verifyPkcs7(corpInfo,req,encryptoed,sReply){
    var msgSignature =req.query.msg_signature;
    var timestamp =req.query.timestamp;
    var nonce= req.query.nonce;

    var token = corpInfo.token;

    var signature = lib.sha.signature(token,timestamp,nonce,encryptoed);
    //console.log (pageName, '----signature-----' ,signature);
    if (msgSignature == signature ) {
        const [err,msg]=lib.aesMsg.decryptoMsgPkcs7(corpInfo,encryptoed);
            if (err) {
                return sReply(err);
            }
            sReply(null,msg);
    }
    else {
        sReply( pageName + ':不是来自企业微信的请求！') ;

    };
};