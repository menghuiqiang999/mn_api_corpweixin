/**
 * Created by Administrator on 2018/5/18.
 */
'use strict';
var pageName = 'test_send_msg';


const corpweixin = require ('./corpweixin');
const sendMsg = corpweixin.sendMsg;


const querystring = require ('querystring');



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
var content1 = '好好学习,天天向上，这会是可以了';

var content = content1;



//console.log (pageName, ':input content:', content);

var postData = {
    "touser"  : "MengHuiQiang" ,
    "toparty" : 1 ,
    "msgtype" : "text" ,
    "agentid" : 1000004 ,
    "text" : { content : content  }
};

/*
var mediaId = '3a-7dvmwwcZg1TGHTMGNjeWWw2HLQvj4Vqktu-KwFAr7Ylf945wdWuwoYqkWWM5Ys';
var postData = {
    "touser"  : "MengHuiQiang" ,
    "toparty" : 1 ,
    "msgtype" : "image" ,
    "agentid" : 1000004 ,
    "image" : { "media_id" : mediaId}

};
*/

var contentData = JSON.stringify(postData) ;

sendMsg(corpInfo,contentData);


//{"touser":"MengHuiQiang","msgtype":"text","agentid":1000004,"news":{"articles":[{"title":"自制葡萄酒","description":"评分8.5 1789人下厨","url":"http://m.xiachufang.com/recipe/109843/?ref=tuling","picurl":"http://s1.cdn.xiachufang.com/9599acfe870611e6a9a10242ac110002_522w_690h.jpg@2o_50sh_1pr_1l_280w_190h_1c_1e_90q_1wh","btntxt":"更多"},{"title":"自制葡萄酒","description":"评分8.2 182人下厨","url":"http://m.xiachufang.com/recipe/100581385/?ref=tuling","picurl":"http://s1.cdn.xiachufang.com/b4e8731a89ae11e6b87c0242ac110003_2400w_3200h.jpg@2o_50sh_1pr_1l_280w_190h_1c_1e_90q_1wh","btntxt":"更多"},{"title":"自酿葡萄酒","description":"评分9.1 70人下厨","url":"http://m.xiachufang.com/recipe/185257/?ref=tuling","picurl":"http://s2.cdn.xiachufang.com/2a556ad8872311e6a9a10242ac110002_490w_367h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90","btntxt":"更多"},{"title":"零失败的分层红酒雪碧","description":"评分8.8 182人下厨","url":"http://m.xiachufang.com/recipe/101811444/?ref=tuling","picurl":"http://s2.cdn.xiachufang.com/b1bcef8e8af511e6b87c0242ac110003_850w_850h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90","btntxt":"更多"},{"title":"红酒雪碧","description":"评分8.4 561人下厨","url":"http://m.xiachufang.com/recipe/100453432/?ref=tuling","picurl":"http://s2.cdn.xiachufang.com/e07761a088df11e6b87c0242ac110003_600w_421h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90","btntxt":"更多"},{"title":"自酿葡萄酒","description":"评分7.9 131人下厨","url":"http://m.xiachufang.com/recipe/20449/?ref=tuling","picurl":"http://s1.cdn.xiachufang.com/feb2e9a486f111e6a9a10242ac110002_490w_732h.jpg@2o_50sh_1pr_1l_280w_190h_1c_1e_90q_1wh","btntxt":"更多"},{"title":"红酒雪梨","description":"评分8.5 159人下厨","url":"http://m.xiachufang.com/recipe/100634595/?ref=tuling","picurl":"http://s2.cdn.xiachufang.com/a850b7088a1b11e6b87c0242ac110003_550w_413h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90","btntxt":"更多"},{"title":"自制葡萄酒","description":"评分8.8 73人下厨","url":"http://m.xiachufang.com/recipe/100373294/?ref=tuling","picurl":"http://s2.cdn.xiachufang.com/47d1f4ba887b11e6b87c0242ac110003_650w_650h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90","btntxt":"更多"}]},"safe":0}

var content2= '{"touser":"MengHuiQiang","msgtype":"news","agentid":1000004,"news":{"articles":[{"title":"自制葡萄酒","description":"评分8.5 1789人下厨","url":"http://m.xiachufang.com/recipe/109843/?ref=tuling","picurl":"http://s1.cdn.xiachufang.com/9599acfe870611e6a9a10242ac110002_522w_690h.jpg@2o_50sh_1pr_1l_280w_190h_1c_1e_90q_1wh","btntxt":"更多"},{"title":"自制葡萄酒","description":"评分8.2 182人下厨","url":"http://m.xiachufang.com/recipe/100581385/?ref=tuling","picurl":"http://s1.cdn.xiachufang.com/b4e8731a89ae11e6b87c0242ac110003_2400w_3200h.jpg@2o_50sh_1pr_1l_280w_190h_1c_1e_90q_1wh","btntxt":"更多"},{"title":"自酿葡萄酒","description":"评分9.1 70人下厨","url":"http://m.xiachufang.com/recipe/185257/?ref=tuling","picurl":"http://s2.cdn.xiachufang.com/2a556ad8872311e6a9a10242ac110002_490w_367h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90","btntxt":"更多"},{"title":"零失败的分层红酒雪碧","description":"评分8.8 182人下厨","url":"http://m.xiachufang.com/recipe/101811444/?ref=tuling","picurl":"http://s2.cdn.xiachufang.com/b1bcef8e8af511e6b87c0242ac110003_850w_850h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90","btntxt":"更多"},{"title":"红酒雪碧","description":"评分8.4 561人下厨","url":"http://m.xiachufang.com/recipe/100453432/?ref=tuling","picurl":"http://s2.cdn.xiachufang.com/e07761a088df11e6b87c0242ac110003_600w_421h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90","btntxt":"更多"},{"title":"自酿葡萄酒","description":"评分7.9 131人下厨","url":"http://m.xiachufang.com/recipe/20449/?ref=tuling","picurl":"http://s1.cdn.xiachufang.com/feb2e9a486f111e6a9a10242ac110002_490w_732h.jpg@2o_50sh_1pr_1l_280w_190h_1c_1e_90q_1wh","btntxt":"更多"},{"title":"红酒雪梨","description":"评分8.5 159人下厨","url":"http://m.xiachufang.com/recipe/100634595/?ref=tuling","picurl":"http://s2.cdn.xiachufang.com/a850b7088a1b11e6b87c0242ac110003_550w_413h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90","btntxt":"更多"},{"title":"自制葡萄酒","description":"评分8.8 73人下厨","url":"http://m.xiachufang.com/recipe/100373294/?ref=tuling","picurl":"http://s2.cdn.xiachufang.com/47d1f4ba887b11e6b87c0242ac110003_650w_650h.jpg?imageView2/1/w/280/h/190/interlace/1/q/90","btntxt":"更多"}]},"safe":0}';
sendMsg(corpInfo,content2);