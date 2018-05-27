/**
 * Created by Administrator on 2018/4/25.
 *
 * accessToken
 *
 * @exaample
 * accessToken=function(corpid,corpsecret,access_token_callback){
 *      ......
 * };
 */
'use strict';
var pageName='corpweixin bus';


//----------------------------------------------------------------------------------------------------------------------
// getAccess_token
exports.getAccessToken=require('./lib/sub_lib/access_token/get_access_token');


//----------------------------------------------------------------------------------------------------------------------
//  user
exports.getUser = require('./lib/address_list/user/get_user');
exports.getDeptUserList=require('./lib/address_list/user/get_dept_user_list');
exports.getDeptUserListDetail=require('./lib/address_list/user/get_dept_user_list_detail');


//----------------------------------------------------------------------------------------------------------------------
//department
exports.getDeptList = require('./lib/address_list/dept/get_dept_list');

//----------------------------------------------------------------------------------------------------------------------
//receive_msg_event
exports.receiveMsgEvent = require ('./lib/msg_push/receive_msg_event') ;
//----------------------------------------------------------------------------------------------------------------------
//sendMsg
exports.sendMsg = require ('./lib/msg_push/send_msg') ;

//----------------------------------------------------------------------------------------------------------------------
//material
exports.material =  require('./lib/material/material') ;


//----------------------------------------------------------------------------------------------------------------------
//Authentication

exports.getUserInfoByCode=require('./lib/auth/get_userinfo_by_code');