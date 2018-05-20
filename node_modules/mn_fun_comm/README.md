#This is a function from Moonlight
##Prerequisite:

    Rewquire: moonlight_function_errplace use: npm install moonlight_function_errplace
    Require: ioredis use: npm install ioredis

#Quick Start
##install
    npm install moonlight_function_common
##Basic Usage

##common
###get_nonce

param len
returns {number}
example

    var nonce = getNonce(10);

###get_rand_char

module getRandChar - generate a rand char, the digit is len.

param len {integer } must > 1

return getRandChar - rand char , len digit

example

    var len = getRandChar(16);

###get_timestamp
returns {number} - return a timestamp , the seconds from 1-1-1970

example

    var timestamp = getTimestamp ();

###translate_options_callback
module translateOptionsCallback

version 1.0.0

param {object} arguments  The arguments of the Function use this function.

param {object} callback function

returns {object} callback function, if success: {null,{ "options" : options , "callback" : callback } }

example   This is example of use case

    var.insert = function(document,options,resultCallback){
       translateOpertionsCallback(arguments,function(err,result){
                         ......
       }
    }


##crypto
###aes
####encrypto
>加密方法

>param data     需要加密的数据 encoding:utf8

>param key 加密key

>param iv       向量

>returns string  format:base64

    var encrypted = encrypto (data,key,iv);

####decrypto

解密方法

>param crypted  密文  format: base64

>param key      解密的key

>param iv       向量 *

>returns string  format:utf8

>example

    var decrypted = decrypto (crypted,key,iv);

###md5
module md5   - the result is UperCase

param input - need to be md5

param callback

returns callback - (err,output)

example

    md5(input,function(err,output){
        ......
    };

###sha
####sha1
param content - Need to sha1

returns d {string} - Returns  the result of sha1

example

    var encryped = sha (content);

##Https
###get
param host - such as  qyapi.weixin.qq.com

param uri   - such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......

param data_callback

example

    get(host,uri,function(err,result){
          ......
    });


###post
@param host - Such as  qyapi.weixin.qq.com

@param uri - Such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......

@param content

@param data_callback

@example

    var host = "qyapi.weixin.qq.com";
    var url = "/cgi-bin/user/create?access_token=" + access_token;
    var content=JSON.stringify(data);
    post (host,uri,content,function(err,result){
        ......
    });



##Mongodb

###Method insert

    var com=require('moonlight_function_common');
    var mongodb = com.mongodb;
    mongodb.insert (document)  {
          ......
     }
     mongodb.insert (document , options)  {
          ......
     }
     mongodb.insert (document , function (err,result)  {
          ......
     }
     mongodb.insert (document, options , function (err,result)  {
         ......
    }

##Redis


    var com = require('moonlight_function_common');
    var redis =com.redis;

####set_key:
    redis.setex_key(key,seconds,value);    //Such as redis.setex_key(key,7200,access_token);     // 7200seconds

    //put value in redis by key_name key, expire time seconds.

####get_key:
get a value from redis by the key_name key, the value callback in the result.

if result is NULL, is means that there is not a vaule in redis by the key_name key.

Such as:

    redis.getkey(key,function(err,result){
       ......
    });

##Xml

###xml2json
param xml - xml from corpweixn

return xmljson -  such as {"xml":{"ToUserName":["wwf54870d97f9ee496"],"AgentID":["1000004"]}}

example

    xml2json(xml,funciotn(err,jsonCallback){
       ......
    });