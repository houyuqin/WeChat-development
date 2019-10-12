const formatMsg = require('./fmtwxmsg');

function help() {
    //字符串形式返回帮助信息
    //还可以是以读取文件的形式返回
    return '你好，这是一个测试号，目前会原样返回用户输入的数据对象。'
}

/*
 *@param {object} wxmsg 解析xml消息的对象
 *@param {object} retmsg 要返回的数据对象
 */
function userMsg(wxmsg,retmsg) {
    //关键字自动回复
    if (wxmsg.MsgType == 'text') {
        switch (wxmsg.Content) {
            case '帮助':
            case 'help':
            case '?':
                retmsg.msg =help();
                retmsg.msgtype = 'text';
                return formatMsg(retmsg);
            case 'about':
                retmsg.msgtype = 'text';
                retmsg.msg = '我是这个测试号开发者,目前测试号正在开发中，更多信息请静待之后的更新';
                return formatMsg(retmsg);
            case 'who':
                retmsg.msgtype = 'text';
                retmsg.msg = '开发者信息：\n'+
                            '河北师范大学软件学院\n'+
                            '姓名：候玉芹\n'+
                            '学号：2017011946\n'+
                            '班级：2017级6班';
                return formatMsg(retmsg);     
            default:
                retmsg.msgtype = 'text';
                retmsg.msg = wxmsg.Content;
                return formatMsg(retmsg);
        }
    }
    //处理其他信息
    switch (wxmsg.MsgType) {
        case 'image':
            retmsg.msgtype = wxmsg.MsgType;
            retmsg.msg = wxmsg.MediaId;
            return formatMsg(retmsg); 
        case 'voice':   
            retmsg.msgtype = wxmsg.MsgType;
            retmsg.msg = wxmsg.MediaId;
            return formatMsg(retmsg); 
        default:
            //retmsg.msgtype类型为空
            //格式化数据返回default处的数据
            //提示用户该类型不被支持
            return formatMsg(retmsg); 
    }
}

exports.help =help;
exports.userMsg = userMsg;

//后续还会加入事件消息支持
exports.msgDispatch=function(wxmsg,retmsg){
    return userMsg(wxmsg,retmsg);
}