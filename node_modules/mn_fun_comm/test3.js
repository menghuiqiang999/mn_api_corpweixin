/**
 * Created by Administrator on 2018/5/26.
 */
'use strict';
var pageName = 'test3';

var com = require ('./com');

//var encrypted  = 'cIMFY2XtkZ+GiHUQ0tlT009jMzvzo+g1bKIsSWBrYUJV6DUkrSDNyU/ZAM6v21+75LxHN9aKsOOXp32bwG1btK1XJsuJZiuMl1515DyZG2VWuGKJYYsQcdeX9fdm3fBwEv1wBtf5u79wA8ybDW2en+BF4JCsHg6+bQtP8dtKNDXbaqe1B2hcWqJ33OJa7zizg1pND8yp+izYInyMm54ShYKjg4Lw+JA5KkqP17AgGJh2LUP+LpjaWduyDaY4san9ia0lGMyEIMCrRzaSvlUQg4aUxhfdX4mqLMtf0fLIqV/uNxrjwuueYmMhYXeCcZqUAotw/DMvBtnSV/3c+JQ2aE7fsx4X3PfTtVg2EMU5OuqOSzly3XDxY7xkGwzsxic7H5s5dYMstGg5iFHwZRfiAYa4m3yE0FYdmwtns6JG7/8==';


//var encrypted = 'sBJ/ttntveYnAjdNR4PK1/SgShoB8b9mkgkbkWyQbhp8/gjEkToRpa57WHQV54IzHURopb4mjeidF2RkmZ7KcF2PQh4jnT2h/eM7nmO08ZRHDe9LCl/fC3zJKu7iG+G1FI2uXrL5750vaCSAJGk/Yfm58AHTsFvd4KE9tH68/CpcFtcAUp7p1pODbdIK3qTi6cIR8TjEqyLreRuGQzcqwsp8wp0WYEugR40UKqvqrDcekBMFTQya7DoIwc2+8gphn//Y1m6R1/aqFAOtDhP1GnQuaKeHGWgbc8X41wQ71FGOjdiQSAYPBaciKk5GnkscdLfVOOEVnjjZbYaqFi1WESBJIpN1p0DQ6mbl8+LcWKMWY5MslabXhYclay8MzhNuROeu8tfNgRaeQXv4aqqOt+8pN53UjoBi4x9zyFQ1ta9/umpAjomxT5n7g6xISPyzY2Ci1awE2tWFro+u4dptPQ==';
//var encrypted = 'X5zzo2c6lUyXIUG2jyrTh+LVTWSuhJdcdXksMuJxs8OM4tLkgmqYHqkLtGwR8d6K5bGRwuh2TrRHonQoTMLXtWxBFwJO5kJUzjGlOUTyF9LCSEus5JZ6qto9H88DOh/WDLr8kT/w4q94sSEnrXp1fgAk8JBu7+B+Aa90ZAheqq5dQwxsEpH5YvURSzw3S6Ept9GYKA0PaLHZ+diMX6gDMg4fGwkV/hUsPEHycA2HSCEn2o8P3bNURDhlRMie6DkH364RSW9MRffAVh7Go0hqGrJM3UpEWs0XpWHXXzoX+1Z3+d16TXautmwkj8YHvyGTPPo/0DOlXtH1OSnQMyoU9J5CxJA0p11qtCS5/NPvVziQ9zMUK+k+lzlhGUnnpme6q4c+Y0fAN5eBiC7p5AIiWXnZg+5R1ygBoUD1jukRw5Ryh+T7QcBZaUwQC/w63Og3VY0ZLqcH1AgrFCrB5HjgbQ==';
//["8XWUO2H30ex0C+wPAep1dNQNOrMT9vOWZnNNvrMbJEcii9azqP9fzsltWe9deEkYmatj7BhgHoO7o8KCLZAK6Wg39k3tOMKmVJRzu6/aB9FYgk80DpzWvQJA4i8J57XBuW9I1agJLyNTz9i6RLDXATxOj7S80u+TPbsyM2lOXFaD+/Q+OQ9std+23i2dhWVn2nyc58K756DX3f6vZ3qf+7+gtL0YztKTI+aGyIvMLKKtvSsdUhv1anxvqSAkOjTmy33kG/FO3f9M+r0yS7e9bJnHTKZVpGc5C4iQVRguJL6LPYgJwFM1UQx3OEWCuiTXX5MPe28oAd9hxjMU5ZTPyknYCg7C/mH7KsAnNir0WtuU9vj3EMwlEonuQmzzMxAshZJqjwq2AoxR2FSO9yqJUBZ23+JzPlMXGLE5chAYcHSYvDChsLZVDYjdbi2I+xBPqC4owz8qENGKUtci63AkHg==
//var encrypted ='8XWUO2H30ex0C+wPAep1dNQNOrMT9vOWZnNNvrMbJEcii9azqP9fzsltWe9deEkYmatj7BhgHoO7o8KCLZAK6Wg39k3tOMKmVJRzu6/aB9FYgk80DpzWvQJA4i8J57XBuW9I1agJLyNTz9i6RLDXATxOj7S80u+TPbsyM2lOXFaD+/Q+OQ9std+23i2dhWVn2nyc58K756DX3f6vZ3qf+7+gtL0YztKTI+aGyIvMLKKtvSsdUhv1anxvqSAkOjTmy33kG/FO3f9M+r0yS7e9bJnHTKZVpGc5C4iQVRguJL6LPYgJwFM1UQx3OEWCuiTXX5MPe28oAd9hxjMU5ZTPyknYCg7C/mH7KsAnNir0WtuU9vj3EMwlEonuQmzzMxAshZJqjwq2AoxR2FSO9yqJUBZ23+JzPlMXGLE5chAYcHSYvDChsLZVDYjdbi2I+xBPqC4owz8qENGKUtci63AkHg==';

const encrypted = 'L56LYOPe/h47u//obk1cR4TphAkTwShUP7L685sMJjZAWMJIa08ULBK1ZQW+hPm3wfYCisuTMe6MmgFh3AM4+fbvoy9+L2/YiPjEBqL/sZf3xzsNSs+us6bZc4pw1qJ9BY+irizvsy6U2wWd4vzEBE0fJDXOh2bZzLNeeT1mF4ILeIxWMi/ylFEvJhvGsbjF7WqPsJ0nUpaTaqr42Jfw9ab5h4Bg/QYTjdsUx5jkyMrdrlBYWKRu2aIF8TlFuJzYrfsADPg3EQz8V+fNt/BM9hEWouNGe2KTLNWsy2YrCczkSOHiCNxTX5tmMVm1ODmkgWbDCi6JM2yD2S+w2j87B8r5qzdk0cKbRrgnMDSRHMvHUlMNoJ8QZidtMa7ojRMid/sl6YR1Ixpizw5A2jRp5Jp5k3DC92n3SYgjr3KHYbDjAgMgLbTGFMiQtnHq4dBpXTRCJM3dyB2gpmDbsQpesGK/r5t19CWoSOEpRpVi2hIJws9ikE66DPbI6tlsmROwJsIyMY0BrFQdTHbxb3vRqZ2rJt9pESGTut32BUpGVAxgzrI9cat4NgDaYcOttzHSeHowM9ZSbsGQu5PCpMOJAN8G52HluU2LxElDMlI1ymwjGFDTdMc92Cw5xGUzsjFjfTuUWHMyIVlCi/f6qD8JA8DW1AnEtFvNy0cfZDtgZAs=';
//const encrypted = 'rrk6wSYhdTiwsarNL+UCsS43cavvBaNmGvdqo5ni4bhnZ4ipDchNuDw/s1xOiVfQG5dbL4ZNdpsCDloW64eF3uyw43jW8f0VeqmFG4fxTOjEOay2U7sjqcCDeNK8kfOG/WqvFCtP5IbhEQEg7y1jYThCCdCjmIKF8a8RsbDzFP/oVYfExHY/CMmQYrigCsyO0q81xIVslbeO7CdM2QW4zhN7gBW1xcX0zDwxz1xZKydi+0f0flOFy9UJaGMvauQrvMAg89FNt4/kv2dUEmLqnQXew5F3ewD9hX/BhWXI/HkX2VLxmZCn5NruPd0kQd670ZBO1xiR3QnS8yxfvDIsAY8Nlu+9r9dNCTdbNSGziwAZIctq8mZXGeVQadF1XCqR6BbHJqW2aMoEgadYO3e2SpE12xFT4m+xWsTRbk8oF1k=';

var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';
//var encodingAESKey = 'DpNwAtixaHQdh1IXTfQdP9c9dBYxUyfCsD1yY2GT3qE';
var encodingAesKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';


var bEncrypted = Buffer.from(encrypted ,'base64');

//console.log(bEncrypted);
//console.log(bEncrypted.slice(-32));
//console.log(buf);
//console.log('-------------bEncrypted length-----' , bEncrypted.length , '----encrypted-----',encrypted.length);
// Decode base64 encodingAesKey
var sEncodingAesKey = encodingAesKey + '=';
//var sEncodingAesKey = encodingAesKey;
var bAesKey=Buffer.from (sEncodingAesKey,'base64');
//console.log( pageName + ':bAesKey: ' + bAesKey + ':lenght:' + bAesKey.length);
// Fetch front 16 byte to iv
var bIv = bAesKey.slice(0,16);


//console.log (pageName + ':bIv: ' + bIv + ':length:' + bIv.length);
//console.log(bAesKey);
//console.log(bIv);



//var decrypto =  com.crypto.aes.decryptoPaddingFalse;
//var decrypto =  com.crypto.aes.decrypto;
var decrypto= com.crypto.aes.decryptoPkcs7;


const [err,buf] =decrypto(encrypted,bAesKey,bIv);
if (err) {
    return console.log(err);
}

//console.log(pageName,msg, '----length---' , msg.length);

const encrypto = com.crypto.aes.encryptoPkcs7;
const encrypted1 = encrypto(buf,bAesKey,bIv);
console.log(encrypted1 , '----length---' , encrypted1.length);

 //  ae b9 3a c1 26 21 75 38 b0 b1 aa cd 2f e5 02 b1     2e 37 71 ab      ef 05 a3 66 1a f7 6a a3 99 e2 e1 b8 67 67 88 a9 0d c8 4d b8 3c 3f b3 5c 4e 89 57 d0 1b 97
//2f 9e 8b 60 e3 de fe 1e 3b bb ff e8 6e 4d 5c 47      84 e9 84 09      13 c1 28 54 3f b2 fa f3 9b 0c 26 36 40 58 c2     48 6b 4f 14 2c 12 b5 65 05 be 84 f9 b7 c1 f6
//57 71 52 6d 45 41 51 42 46 65 57 4f 6d 6f 33 39      00 00 01 c7      20 3c 78 6d 6c 3e 3c 54 6f 55 73 65 72 4e 61 6d 65 3e 3c 21 5b 43 44 41 54 41 5b 77 77 66
//b28aa56fd9c7131d�<xml><ToUserName><![CDATA[wwf54870d97f9ee496]]></ToUserName><FromUserName><![CDATA[MengHuiQiang]]></FromUserName><CreateTime>1527915824</CreateTime><MsgType><![CDATA[image]]></MsgType><PicUrl><![CDATA[http://p.qpic.cn/pic_wework/2684731676/353365396b463129a652fc629c215a45974e359b3ca5f92d/]]></PicUrl><MsgId>1812452890</MsgId><MediaId><![CDATA[1IIsvfq8ko3ECb27vUOWTKDh5Nk8VQhTVt1ElPFv6EqWjKlSF09dLQVkT3aiZ3S2H]]></MediaId><AgentID>1000004</AgentID></xml>wwf54870d97f9ee496
/*

function decrypto ( crypted , key, iv) {
    const crypto = require('crypto');
    try {
        var algorithm = 'aes-256-cbc' ;
        var decipher = crypto.createDecipheriv(algorithm , key, iv);
        decipher.setAutoPadding(false);
        var decoded = decipher.update(crypted,'base64','hex');
        decoded += decipher.final('hex');
        return decoded;
    }
    catch (err) {
        console.log(pageName,'---There is an error at decrypto---',err);
    }


}


*/