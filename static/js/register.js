

function checkUsername(us){
    if(us.length>6&&us.length<16){

        return true;
    }
    iziToast.show({
        class: 'test',
        color: '#ffffff',
        icon: 'icon-contacts',
        title: '用户名长度应为6到16',
        message: '请重试',
        position: 'topCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        progressBarColor: 'rgb(0, 255, 184)',
        image: '../static/images/error_cat.gif',
        imageWidth: 70,
        layout:2,
        onClose: function(){
            console.info('onClose');
        },
        iconColor: 'rgb(0, 255, 184)'
    });
    return false;
}

function checkPwd(password){
    if(password.length>6&&password.length<16){

        return true;
    }
    iziToast.show({
        class: 'test',
        color: '#ffffff',
        icon: 'icon-contacts',
        title: '密码长度应为6到16',
        message: '请重试',
        position: 'topCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        progressBarColor: 'rgb(0, 255, 184)',
        image: '../static/images/error_cat.gif',
        imageWidth: 70,
        layout:2,
        onClose: function(){
            console.info('onClose');
        },
        iconColor: 'rgb(0, 255, 184)'
    });

    return false;
}

function  checkEmail(email){
    if (email != "") {
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        var isok= reg.test(email );
        if (isok) {
            return true;
        } else {
            iziToast.show({
                class: 'test',
                color: '#ffffff',
                icon: 'icon-contacts',
                title: '邮箱格式错误',
                message: '请重试',
                position: 'topCenter',
                transitionIn: 'flipInX',
                transitionOut: 'flipOutX',
                progressBarColor: 'rgb(0, 255, 184)',
                image: '../static/images/error_dog.gif',
                imageWidth: 70,
                layout:2,
                onClose: function(){
                    console.info('onClose');
                },
                iconColor: 'rgb(0, 255, 184)'
            });
            return false;
        }
    };
}

function checkPwdAgain(pwdAgain,password){
    if(pwdAgain.eq(password)){
        return true;
    }
    iziToast.show({
        class: 'test',
        color: '#ffffff',
        icon: 'icon-contacts',
        title: '两次密码不一致',
        message: '请重试',
        position: 'topCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
    progressBarColor: 'rgb(0, 255, 184)',
        image: '../static/images/error_dog.gif',
        imageWidth: 70,
        layout:2,
        onClose: function(){
        console.info('onClose');
    },
    iconColor: 'rgb(0, 255, 184)'
});
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