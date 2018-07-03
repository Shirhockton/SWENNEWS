var selected = 1
var edit_flag=false;
$(document).ready(function(){
    var slide_flag=false;
    $("body").niceScroll({cursorborder:"",cursorcolor:"#9D9D9D",boxzoom:true});
    $(".user").click(function(){
        if(!slide_flag)
        {
            $(".panel").slideDown("fast");
            slide_flag=true;
        }
        else{
            $(".panel").slideUp("fast");
            slide_flag=false;
        }
    });
});
function news_list() {
    $(".news_list").append("<li>新闻1</li>")
}
function mynews_mouse_cover() {
    if(1!=selected){
        $(".my_news").css('background-image','url(../static/images/buttonDown.png)')
    }
}

function mynews_mouse_out() {
    if(1==selected){
        $(".my_news").css('background-image','url(../static/images/selectedBg.png)')
    }
    else {
        $(".my_news").css('background-image','url(../static/images/blank.png)')
    }
}

function mynews_mouse_click(){
    selected=1;
    $(".my_favor").css('background-image','url(../static/images/blank.png)')
}

function exit_mouse_cover() {
    if(2!=selected){
        $(".my_favor").css('background-image','url(../static/images/buttonDown.png)')
    }
}

function exit_mouse_out() {
    if(2==selected){
        $(".my_favor").css('background-image','url(../static/images/selectedBg.png)')
    }
    else {
        $(".my_favor").css('background-image','url(../static/images/blank.png)')
    }
}

function exit_mouse_click(){
    selected=2;
    $(".my_news").css('background-image','url(../static/images/blank.png)')
}
function swen_news_click(){
    window.location.href="main.html"
}
function edit_info() {
    if(!edit_flag){
        $(".shelter_user_center").css('display','block');
        $(".info_edit").animate({
            top:'+=1100px'
        });
        edit_flag=true;
    }
    else
    {
        $(".shelter_user_center").css('display','none');
        $(".info_edit").animate({
            top:'-=1100px'
        });
        edit_flag=false;
    }
}