function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y+M+D+h+m+s;
}

export const toLogin = (state,payload) => {
    state.isLogin = true;
    var create_time = timestampToTime(payload.create_time)
    var user_info = {
        stu_name: payload.stu_name,
        tel: payload.tel,
        balance: payload.balance,
        avatar: payload.avatar,
        create_time: create_time,
        ischecked: payload.ischecked,
        sex: payload.sex
    }
    state.user_info = user_info
};