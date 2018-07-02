var selected=1;
var tag_sel=-1;//-1 未选中，1时政，2科技，3娱乐，4游戏，5体育，6财经
var create_flag=false;
var scrollTop = $("body").scrollTop();
var scrollHeight = $("body").height();
var windowHeight = $("body").height();
$(document).ready(function(){
    var num=0;
    var angle=0;
    var slide_flag=false;
    var tag_slide_flag=false;
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
    loadMore();
    $(".three_points").click(function(){
        $(".tag_panel").slideToggle("fast");
    });
    $(".main_block").click(function(){
        $(".main_block").animate({
            top:'+=2000px',
        });
        var t=setTimeout("window.location.href=\"detail.html\"",500);
    });
    var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window')
    }, {
        offset: '25%'
    })
});
function newest_moouse_over() {
    if(1!=selected)
    {
        $(".newest").css('background-image','url(../static/images/buttonDown.png)')
    }
}
function newest_moouse_out() {
    if(1==selected)
    {
        $(".newest").css('background-image','url(../static/images/selectedBg.png)')
    }
    else
    {
        $(".newest").css('background-image','url(../static/images/blank.png)')
    }
}
function newest_click() {
    selected=1;

    $(".hot").css('background-image','url(../static/images/blank.png)')
    $(".tagged").css('background-image','url(../static/images/blank.png)')
}
function hot_moouse_over() {
    if(2!=selected)
    {
        $(".hot").css('background-image','url(../static/images/buttonDown.png)')
    }
}
function hot_moouse_out() {
    if(2==selected)
    {
        $(".hot").css('background-image','url(../static/images/selectedBg.png)')
    }
    else
    {
        $(".hot").css('background-image','url(../static/images/blank.png)')
    }
}
function hot_click() {
    selected=2;
    $(".newest").css('background-image','url(../static/images/blank.png)')
    $(".tagged").css('background-image','url(../static/images/blank.png)')
}
function tagged_moouse_over() {
    if(3!=selected)
    {
        $(".tagged").css('background-image','url(../static/images/buttonDown.png)')
    }
}
function tagged_moouse_out() {
    if(3==selected)
    {
        $(".tagged").css('background-image','url(../static/images/selectedBg.png)')
    }
    else
    {
        $(".tagged").css('background-image','url(../static/images/blank.png)')
    }
}
function tagged_click() {
    selected=3
    $(".newest").css('background-image','url(../static/images/blank.png)')
    $(".hot").css('background-image','url(../static/images/blank.png)')
}
function create_news() {
    if(!create_flag)
    {
        $(".shelter").css('display','block');
        $(".create_news").animate({
            top:'+=1013px'
        });
        $(".news_content").niceScroll({cursorborder:"",cursorcolor:"#cfcfcf",boxzoom:true});
        create_flag=true;
    }
    else
    {
        $(".shelter").css('display','none');
        $(".create_news").animate({
            top:'-=1013px'
        });
        create_flag=false;
    }

}
function user_center_click() {
    window.location.href="user_center.html"
}
function init(selected)
{
    if(1==selected)
    {

    }
    else if(2==selected)
    {

    }
    else
    {

    }
}
// $(".main").scroll(function(){
//     var scrollTop = $(this).scrollTop();
//     var scrollHeight = $(this).height();
//     var windowHeight = $(this).height();
//     alert("已经到最底部了！");
//     if(scrollTop == scrollHeight){
//         alert("已经到最底部了！");
//     }
// });
function three_points() {

}
function tag_1_click() {
    $(".tag_text").text("时政");
    $(".tag_text").css('color','#000000');
    $(".tag_panel").slideToggle("fast");
}
function tag_2_click() {
    $(".tag_text").text("科技");
    $(".tag_text").css('color','#000000');
    $(".tag_panel").slideToggle("fast");
}
function tag_3_click() {
    $(".tag_text").text("娱乐");
    $(".tag_text").css('color','#000000');
    $(".tag_panel").slideToggle("fast");
}
function tag_4_click() {
    $(".tag_text").text("游戏");
    $(".tag_text").css('color','#000000');
    $(".tag_panel").slideToggle("fast");
}
function tag_5_click() {
    $(".tag_text").text("体育");
    $(".tag_text").css('color','#000000');
    $(".tag_panel").slideDown("fast");
}
function tag_6_click() {
    $(".tag_text").text("财经");
    $(".tag_text").css('color','#000000');
    $(".tag_panel").slideUp("fast");
}
function create_confrim() {
    $(".shelter").css('display','none');
    $(".create_news").animate({
        top:'-=1013px'
    });
    var t=setTimeout("window.location.href=\"main.html\"",500);
}

function loadMore() {
    $(window).scroll(
        function() {
            var scrollTop = $(this).scrollTop();
            var scrollHeight = $(document).height();
            var windowHeight = $(this).height();
            if (scrollTop + windowHeight == scrollHeight) {
                alert("弹弹弹");
            }
        });
}
