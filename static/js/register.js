


// function preCheck() {
//     var username = $("#loginName").val();
//     var password = $("#password").val();
//     var email = $("#email").val();
//     var pwdAgain = $("#passwordAgain").val();
//     $("#loginName").blur(function () {
//             checkUsername(username);
//     })
//     $("#password").blur(function () {
//             checkPwd(password);
//     })
//     $("#email").blur(function () {
//       checkEmail(email);
//     })
//     $("#passwordAgain").blur(function () {
//         checkPwdAgain(pwdAgain,password);
//     })
// }

function checkUsername(us){
    if(us.length>6&&us.length<16){

        return true;
    }
    $("#judgeUr").append("US");
    return false;
}

function checkPwd(password){
    if(password.length>6&&password.length<16){

        return true;
    }
    $("#judgeUr").append("PWD");

    return false;
}

function  checkEmail(email){
    if (email != "") {
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        var isok= reg.test(email );
        if (isok) {
            return true;
        } else {
            $("#judgeUr").append("email");
            return false;
        }
    };
}

function checkPwdAgain(pwdAgain,password){
    if(pwdAgain.eq(password)){
        return true;
    }
    $("#judgeUr").append("PWDA");
    return false;
}

function register(){
    var username = $("#loginName").val();
    var password = $("#password").val();
    var email = $("#email").val();
    var pwdAgain = $("#passwordAgain").val();
    var isRight= checkUsername(username)&&checkEmail(email)&&checkPwd(password)&&checkPwdAgain(pwdAgain);
    if(isRight) {
        $.post("url", {
                username: username,
                email: email,
                password: password,
            },
            function (data, status) {
                alert("数据: \n" + data + "\n状态: " + status);
            });
        // }
    }
}


// $(function () {
//     if((!$("#loginName").hasFocus())||(!$("#password").hasFocus())||(!$("#passwordAgain").hasFocus())||(!$("#email").hasFocus())){
//         preCheck();
//     }
// })