/**
 * Created by Administrator on 2018/4/25.

 */
"use strict";
var pageName="test_verify_url";

var corpweixin = require('./corpweixin');
//----------------------------------------------------------------------------------------------------------------------

var corpweixin = require ('./corpweixin');

var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';

var encodingAesKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';


var msg_signature='5b507d81ef0bea14c051bc644a5d11ed3f1cf669';

var timestamp=1526084034;
var nonce=1526201506;

var echostr = 'jHMzSPr7t5FlCtdjHN3UcKo+Y1nBclaCSWpVsZr3QFNvHYwmDxxhnvCIKlUj13Scw8AA5mCy9IKK4as00ikWMQ==';
//var echostr = 'ddd';
var corpInfo = {
    corpId : corpId ,
    corpSecret :corpSecret ,
    token : token ,
    encodingAesKey :encodingAesKey

};

var req = {"query" : {
    echostr : echostr ,
    "msg_signature" : msg_signature ,
    "timestamp" : timestamp ,
    "nonce" : nonce

    }
};

var receiveMsgEvent = corpweixin.receiveMsgEvent ;


// Test verifyUrl

receiveMsgEvent.verifyUrl(corpInfo,req,function(err,sReply){
    if (err) {
        console.log(pageName , '----err------' ,err);
    }
    console.log(pageName , '----sReply-----' , sReply);

});