function signIn(){
    var loginName = $("#loginName"),password = $("#Password");
    var loginName = loginName.val(),password = password.val();
    $.ajax({
        url: '/SwenNews/api/v1/session',
        type: 'POST',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({"username": loginName, "password": password}),
    })
        .done(function(data) {
            if (!data.result) {
                alert("成功登陆");
                window.location.href="main.html"
            } else {
                alert("密码或用户名错误")
            }
        })
        .fail(function() {
            console.log("error")
        })

}

// 错误信息提醒
//
//监听回车键提交
$(function(){
    document.onkeydown=keyDownSearch;
    function keyDownSearch(e) {
        // 兼容FF和IE和Opera
        var theEvent = e || window.event;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
            $('#submit').click();//具体处理函数
            return false;
        }
        return true;
    }
});
function jump(url) {
    window.location.href=url;
}