/**
 * Created by Administrator on 2018/4/26.
 */

"use strict";
var page_name="test";
var pageName='test';


var com=require('./com');

//----------------------------------------------------------------------------------------------------------------------
//test common
var comm = com.common
var getRandChar = comm.getRandChar;
var len = getRandChar(16);
console.log (pageName, ':len:',len);

var getNonce =comm.getNonce;
var nonce= getNonce(10);
console.log(page_name,':nonce:',nonce);
var timestamp = comm.getTimestamp();

console.log(page_name,':timestamp:',timestamp);

// ---------------------------------------------------------------------------------------------------------------------
//Test crypto



var key= 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC=';



//var ss = '64AtQdXE8Ihn+gqBQvFLsgs7H1uYUhwNObPn/90u7eb8mb0cNCmqJJtCFnSWLf16b8sEgPAAg7Y46baQe6g6z1uVSqufIzZ5VjmdbcUjhvuv3Rzoi0X7ejZGxNDTzpPdhOZmUrqZp8Fq48VYOTfYpsSFLsXG+AVTip93yHpNuGs6Lf9Md/y+SFayjr2aYKsEaDpz63IkBN6Fl/gx40s8ySBVoo0univUxDJ3UzDDz4fp1xukOvGrG4KGX8s5ln61M7B0P4NBZUXR9K4scrSBQKR17tLQaQC9D0RAiDA6tvwoANYGlbAiZhp3scUN5697O5DEzjvk68UVWCqGuWhbljV3L9GdbvWsJ3XCpzUtIFlJM3oD56h/VmmsITeAa0nxHryYAtJVd2P/DlPPB4ViUre067tz3QusHhFPjyaSeHogtehJMZ9mnUguf1FvG+Qg7B0gHoJ4GZkmGx1GfzGrRQ==';

//var ss = 'eGVlIrGeeY4R6K5QpH0SyHe1q2UMnF/mVpB3zH2Tj080U5zp8XnDro99hwFhI3Ci5wCVkCqYG2bXMoe4tpJJokP/KdiRlQwev7QsvSBJOj7VEiPhAYo5Pw1X9flHeC1Et0NE8cgzz8vpvX0NU7qOWFFLI241JkqRP9GnBuUmD2co309YOPm94phQZV9BrPNRHVDz0+Vjr04lF/KrmphtW72yWkKOnvW1+Um+NEZqNX+wMX6W3+R8tElMgXQTJcvq14wNMTbQTB6jEPybDbdJp7O7kKz7drB7CqHYmx3CVwS3wG3xFI2bXTE8pzEqSkXgWvyMfuNY/QGyV5O2d1ymENglqnExAQxw4lP2TsCbLJFzNToEA0aGUS1QtRTWg9Tw7fZp11KR5mnVlP8SFXGtGo4pgrOcqM1k8a5Zl5IuMgI=';
var ss = 'EDhFQahu/R2uLx5r3YxMVR5NffTt35/miWq14U5O4D1b5eLpHMjgcF3orQQZi88UxF9SM1isMaWW/kWZs52L1CssNc+aFcWzm+0VaGIY6Ct1oViKiQoVTU8m9oOflZnck/+wbKJPQNURzYuLoOlyhW8imyfOb9w+ziifqSiedQ621/XidtIWBxzulfmziupickWvqmXJrbJ46QBpc9oHZMZIp0hweP+2HajAV5tHE89u2RQltt1DlL3D0meGwbv9F/bI7sPtfcOxNM9hIrOt+mSH/cf+G6J53bz1azRJhDZLTKwaGlrqUhA8K7QIy99vmInoP/Zo1p+QuKw8PKLUjciHVowYnEBJCzJTNls/ktshYyoPZrivllWT9akVE/OvLOD9cTx5Io4q3UFE4QYvP587zoixWGCEyWGgMQJftPQljpJHeDP3VcIqXDzR9aVz3l8l7AXUDoAiVzyrQto4bQ=';
var bkey = Buffer.from (key,'base64');
console.log(bkey);
// Fetch front 16 byte to iv
var bIv = bkey.slice(0,16);

var sDeAes256 = com.crypto.aes.decrypto(ss,bkey,bIv);
console.log( pageName,':sDeAes256:',sDeAes256);







//----------------------------------------------------------------------------------------------------------------------
// Note:
//
//


    var mnget = function(){
        var https=com.https;
        var get=https.get;

        var corpid = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
        var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录

        var host = "qyapi.weixin.qq.com";
        var url = "/cgi-bin/gettoken?corpid=" + corpid + "&corpsecret=" + corpsecret;
        get (host, url,function(err,data_callback) {
            console.log(page_name + ":data_callback:" + data_callback);
        })
    };
   // mnget();

//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
// Note:
//
//



    var mnredis = function(){
        var redis = com.redis;

        var setkey = redis.setkey;
        var setex_key = redis.setex_key;
        var getkey = redis.getkey;

        var expire_time=redis.expire_time;

        var key="moonlight";
        //setkey(key,"wine");
        setex_key(key,30,"wine");
        expire_time(key,60);

        getkey(key,function(err,value){
            console.log(page_name +":value:"+ value);
        })
    };

    //mnredis();


//----------------------------------------------------------------------------------------------------------------------



var test_post=function(){
    var userid = "MengHuiQiang";
    var access_token="6FLZS4ZbH_Et5AE3NfLYOGjxmynKESSK_TpRZeX8xeeqfGzooS2KumY62xWVNZKwJmboU2VUVOWgYcUBf8lycv8MRS0FrUdcGXzYTrB8fqzPTcfONst9rZ1Ra9Sk1NZx17lppqPhw8Rnp-CE5zWVE0SwVV_TqYi7hueLU-SnW_X7JD14AkR-fzOAyQq3oLPvrLuI0NrVnicb3pAn-FK-VA";

    var https= com.https;
    var post=https.post;
    var data = {
        "userid": "zhangsan7",
        "name": "张三3",
        "english_name": "jackzhaneg",
        "mobile": "15945216521",
        "department": [1],
        "order": [10, 40],
        "position": "产品经理",
        "gender": "1",
        "isleader": 1,
        "enable": 1
    };

    var createuser_corpweixin = function (data) {
        var host = "qyapi.weixin.qq.com";
        var url = "/cgi-bin/user/create?access_token=" + access_token;
        var content=JSON.stringify(data);
        post(host, url,content,function(err,result){
            console.log(page_name+":the post result: "+ result);

        });
    };
    createuser_corpweixin(data);
};

//test_post();





//----------------------------------------------------------------------------------------------------------------------
//test mongodb
var mongodb = com.mongodb;

var options = {
    collectionName : "peweb"
};


var document = { name : "孟会强" , mobile : "18607558188" , weixin : "menghuiqiang999", city : "Shenzhen"};

//mongodb.insert ( document , options   );

var assert = require ('assert') ;



var defaultOptions = {
    url :  "mongodb://localhost:27017",
    dbName : "moonlight",
    collectionName : "pewebs"
};


mongodb.setDefaultOptions(defaultOptions,function(err,result_callback){
    if (err) {
        return console(pageName + 'this is a erroe from setDefaultOptions' );
    }
    console.log (pageName + ':result_callback:' + result_callback );
    if (result_callback) {

        mongodb.insert (document, function (err,result)  {
            if (err) {
                return console.log (pageName + ':The is a err from mongodb.insert' );
            };
            console.log (pageName + ":result:" + JSON.stringify (result) ) ;

        } );
    }
});





