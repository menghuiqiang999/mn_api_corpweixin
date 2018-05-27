/**
 * Created by Administrator on 2018/4/25.

 */
"use strict";
var pageName="test";

var corpweixin = require('./corpweixin');
//----------------------------------------------------------------------------------------------------------------------
// Test verifyUrl
var corpweixin = require ('./corpweixin');
var receiveMsg = corpweixin.receiveMsg;


var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';

var encodingAesKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';


var msg_signature = 'ce3ec7c64f35bf80f9f86e6d1fd48d8f9abb5347';
var timestamp = 1527387744;
var nonce = 1526911498;

var corpInfo = {
    corpId : corpId ,
    corpSecret :corpSecret ,
    token : token ,
    encodingAesKey :encodingAesKey
};

var req = {"query" : {

    "msg_signature" : msg_signature ,
    "timestamp" : timestamp ,
    "nonce" : nonce

    }
};

var receiveMsgEvent = corpweixin.receiveMsgEvent ;

receiveMsgEvent.receiveMsg(corpInfo,req,function(err,result){
    if (err) {
        console.log(pageName, '----err---' , err)
    }
    console.log( pageName , '-----result----' , result)
});
