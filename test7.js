/**
 * Created by Administrator on 2018/5/20.
 */
'use strict';
var pageName = 'test7';


const corpweixin = require ('./corpweixin');
const sendMedia = corpweixin.sendMedia;


const querystring = require ('querystring');

var com = require('mn_fun_comm');
var sha1 = com.crypto.sha.sha1;

var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';

var encodingAesKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';


var corpInfo = {
    corpId : corpId ,
    corpSecret : corpSecret ,
    token : token ,
    encodingAesKey : encodingAesKey
};

const  verifyUrl= corpweixin.receiveMsgEvent.verifyUrl;
var msg_signature='5b507d81ef0bea14c051bc644a5d11ed3f1cf669';
//                    5b507d81ef0bea14c051bc644a5d11ed3f1cf669

var timestamp=1526084034;
var nonce=1526201506;
//var echostr = 'Q3Z1hAmsPLk0v15+H9mdhIYmKZjtTOde6HCUj91tmqMv+F6fZtGvMeNecrdygyalV/uKzsgYqDUejyDpZVPIIQ==';
var echostr = 'jHMzSPr7t5FlCtdjHN3UcKo+Y1nBclaCSWpVsZr3QFNvHYwmDxxhnvCIKlUj13Scw8AA5mCy9IKK4as00ikWMQ==';



var req = {"query" : {

    "msg_signature" : msg_signature ,
    "timestamp" : timestamp ,
    "nonce" : nonce ,
    "echostr" :echostr
}
};


verifyUrl(corpInfo,req,function(err,sReply){

    console.log ( pageName , ':sReply:' , sReply) ;

});
