'use strict'

const cryp = ' <xml><ToUserName><![CDATA[wwf54870d97f9ee496]]></ToUserName><FromUserName><![CDATA[MengHuiQiang]]></FromUserName><CreateTime>1527915824</CreateTime><MsgType><![CDATA[image]]></MsgType><PicUrl><![CDATA[http://p.qpic.cn/pic_wework/2684731676/353365396b463129a652fc629c215a45974e359b3ca5f92d/]]></PicUrl><MsgId>1812452890</MsgId><MediaId><![CDATA[1IIsvfq8ko3ECb27vUOWTKDh5Nk8VQhTVt1ElPFv6EqWjKlSF09dLQVkT3aiZ3S2H]]></MediaId><AgentID>1000004</AgentID></xml>';
console.log ('------cryp.length----' , cryp.length);


var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';

var encodingAesKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';
var sub_lib = require('./lib/sub_lib');

sub_lib.aesMsg.encryptoMsg(cryp,corpId,encodingAesKey,function(err,result){
    console.log(result);
})